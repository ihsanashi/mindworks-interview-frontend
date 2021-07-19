export default function PostDetail({ title, body }) {
  return (
    <section className='max-w-2xl mx-auto mt-8'>
      <div>
        <h3 className='mb-5 text-3xl font-semibold text-gray-800'>{title}</h3>
        <p className='text-base font-normal text-gray-600 md:text-lg'>{body}</p>
      </div>
    </section>
  );
}
