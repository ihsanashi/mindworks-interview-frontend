import Head from 'next/head';
import Link from 'next/link';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Mindworks Frontend Interview - Ahmad Ihsan</title>
        <meta
          name='description'
          content='Next.js site for fetching posts and comments from jsonplaceholder api'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='py-8 md:py-12 lg:py-16'>
        <div className='container'>
          <section className='max-w-lg mx-auto'>
            <div className='text-center'>
              <h1 className='mb-5 text-4xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-purple-500'>
                Displaying all posts
              </h1>
              <h5 className='text-lg text-gray-700'>
                Content retrieved from{' '}
                <a
                  className='inline-block text-purple-400 underline transition duration-300 ease-in-out hover:text-purple-600'
                  target='_blank'
                  rel='noreferrer'
                  href='https://jsonplaceholder.typicode.com/'
                >
                  JSON Placeholder
                </a>
              </h5>
            </div>
          </section>
          <section className='mx-auto mt-8 max-w-max'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
              {data.map((post) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                  <a className='inline-grid'>
                    <div className='p-5 transition duration-300 ease-in-out border border-purple-200 rounded-md group hover:border-transparent hover:shadow-lg hover:bg-pink-500'>
                      <small className='bg-pink-200 text-pink-500 py-0.5 px-1.5 text-center inline-block rounded-md'>
                        #{post.id}
                      </small>
                      <h5 className='mt-2.5 text-base md:text-lg lg:text-xl font-medium text-gray-800 group-hover:text-white'>
                        {post.title}
                      </h5>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  if (!data) return { notFound: true };

  return {
    props: {
      data,
    },
  };
}
