import Head from 'next/head';
import BackHeader from '../../components/BackHeader';
import Custom404 from '../404';
import PostDetail from '../../components/PostDetail';
import PostCommentsFilter from '../../components/PostCommentsFilter';

export default function Post({ postData, commentsData }) {
  if (Object.keys(postData).length === 0) return <Custom404 />;

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta
          name='description'
          content={`Full content for post titled ${postData.title}`}
        />
      </Head>

      <main className='py-8 md:py-12 lg:py-16'>
        <div className='container'>
          <BackHeader />
          <PostDetail title={postData.title} body={postData.body} />
          <PostCommentsFilter commentsData={commentsData} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
  );

  const postData = await post.json();
  const commentsData = await comments.json();

  if (!postData) return { notFound: true };

  return {
    props: {
      postData,
      commentsData,
    },
  };
}
