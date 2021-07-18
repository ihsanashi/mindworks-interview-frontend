import Head from 'next/head';
import Link from 'next/link';
import InputWithLabel from '../../components/InputWithLabel';
import Custom404 from '../404';

export default function PostDetail({ postData, commentsData }) {
  if (Object.keys(postData).length === 0) return <Custom404 />;

  const applyFilter = (e) => {
    e.preventDefault();
  };

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
          <section className='max-w-2xl mx-auto'>
            <div>
              <Link href='/'>
                <a className='inline-block text-pink-400 hover:text-pink-600 transition duration-300 ease-in-out border-b border-transparent hover:border-pink-600 transform hover:translate-x-1'>
                  Back to homepage
                </a>
              </Link>
            </div>
          </section>
          <section className='max-w-2xl mx-auto mt-8'>
            <div>
              <h3 className='text-3xl font-semibold text-gray-800 mb-5'>
                {postData.title}
              </h3>
              <p className='text-base md:text-lg font-normal text-gray-600'>
                {postData.body}
              </p>
            </div>
          </section>
          <section className='max-w-2xl mx-auto border p-8 rounded-md border-gray-200 my-8 md:my-12 lg:my-20'>
            <div>
              <div className='flex flex-row justify-between items-center mb-4 md:mb-8 lg:mb-12'>
                <p className='text-base font-normal text-gray-700'>
                  Filter comments
                </p>
                <p className='text-sm font-light text-gray-600'>
                  Displaying {commentsData.length} comments
                </p>
              </div>
              <form onSubmit={applyFilter}>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2.5'>
                  <InputWithLabel
                    id='name'
                    name='name'
                    type='text'
                    placeholder='John Doe'
                    label='Name'
                  />
                  <InputWithLabel
                    id='email'
                    name='email'
                    type='text'
                    placeholder='john@doe.com'
                    label='Email address'
                  />
                  <InputWithLabel
                    id='body'
                    name='body'
                    type='text'
                    placeholder='hey'
                    label='Comment body'
                  />
                </div>
                <div className='flex flex-row justify-end mt-4'>
                  <button className='px-6 py-2 bg-white text-gray-700 font-medium border border-gray-300 rounded-md  hover:border-transparent hover:bg-green-600 hover:text-white hover:shadow-lg transition duration-300 ease-in-out'>
                    Apply
                  </button>
                </div>
              </form>
            </div>
            <div className='grid grid-cols-1 gap-y-5 mt-8 md:mt-14'>
              {commentsData.map((comment) => (
                <article key={comment.id}>
                  <div className='flex flex-col md:flex-row flex-nowrap items-baseline md:justify-between md:gap-x-2'>
                    <p className='text-base font-medium text-gray-800'>
                      {comment.name}
                    </p>
                    <small className='text-sm text-gray-600 font-normal'>
                      {comment.email}
                    </small>
                  </div>
                  <blockquote className='text-base font-normal mt-2.5 text-gray-700 italic'>
                    {comment.body}
                  </blockquote>
                </article>
              ))}
            </div>
          </section>
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
