export default function CommentsList({ comments }) {
  return (
    <div className='grid grid-cols-1 mt-8 gap-y-5 md:mt-14'>
      {comments.map((comment) => (
        <article key={comment.id}>
          <div className='flex flex-col items-baseline md:flex-row flex-nowrap md:justify-between md:gap-x-2'>
            <p className='text-base font-medium text-gray-800'>
              {comment.name}
            </p>
            <small className='text-sm font-normal text-gray-600'>
              {comment.email}
            </small>
          </div>
          <blockquote className='text-base font-normal mt-2.5 text-gray-700 italic'>
            {comment.body}
          </blockquote>
        </article>
      ))}
    </div>
  );
}
