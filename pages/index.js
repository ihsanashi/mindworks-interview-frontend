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
              <h1 className='text-4xl mb-5 text-transparent font-semibold bg-gradient-to-r bg-clip-text from-red-500 to-purple-500'>
                Displaying all posts
              </h1>
              <h5 className='text-gray-700 text-lg'>
                Content retrieved from{' '}
                <a
                  className='underline inline-block text-purple-400 hover:text-purple-600 transition duration-300 ease-in-out'
                  target='_blank'
                  href='https://jsonplaceholder.typicode.com/'
                >
                  JSON Placeholder
                </a>
              </h5>
            </div>
          </section>
          <section className='max-w-max mx-auto mt-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
              {data.map((post) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                  <a className='inline-grid'>
                    <div className='border rounded-md border-purple-200 p-5 group hover:border-transparent hover:shadow-lg hover:bg-pink-500 transition duration-300 ease-in-out'>
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
