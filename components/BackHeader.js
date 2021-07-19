import Link from 'next/link';

export default function BackHeader() {
  return (
    <section className='max-w-2xl mx-auto'>
      <div>
        <Link href='/'>
          <a className='inline-block text-pink-400 transition duration-300 ease-in-out transform border-b border-transparent hover:text-pink-600 hover:border-pink-600 hover:translate-x-1'>
            Back to homepage
          </a>
        </Link>
      </div>
    </section>
  );
}
