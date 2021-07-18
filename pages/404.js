import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta
          name='description'
          content='The page you requested does not exist.'
        />
      </Head>
      <main>
        <section className='h-screen'>
          <div className='container flex flex-col justify-center h-full'>
            <div className='flex flex-row items-baseline'>
              <h3 className='text-2xl text-gray-800 font-semibold'>
                404 | Page not found
              </h3>
            </div>
            <h6 className='mt-8 font-sans text-lg font-light text-gray-700'>
              Go back to{' '}
              <Link href='/'>
                <a className='font-medium text-gray-500 no-underline transition duration-300 ease-in-out delay-100 hover:text-primary-500 hover:underline'>
                  home
                </a>
              </Link>
            </h6>
          </div>
        </section>
      </main>
    </>
  );
}
