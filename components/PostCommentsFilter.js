import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import CommentsList from './CommentsList';

export default function PostCommentsFilter({ commentsData }) {
  const [comments, setComments] = useState(commentsData);

  const initialFormState = {
    name: '',
    email: '',
    body: '',
  };

  const [{ name, email, body }, setFormState] = useState(initialFormState);

  const resetFormState = () => {
    setFormState({ ...initialFormState });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    commentsData = commentsData.filter(
      (comment) =>
        comment.name.includes(name) &&
        comment.email.includes(email) &&
        comment.body.includes(body)
    );
    setComments(commentsData);
  };

  return (
    <section className='max-w-2xl p-8 mx-auto my-8 border border-gray-200 rounded-md md:my-12 lg:my-20'>
      <div>
        <div className='flex flex-row items-center justify-between mb-4 md:mb-8 lg:mb-12'>
          <p className='text-base font-normal text-gray-700'>Filter comments</p>
          <p className='text-sm font-light text-gray-600'>
            Displaying {comments.length} comment
            {comments.length > 1 ? 's' : ''}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-2.5'>
            <InputWithLabel
              id='name'
              name='name'
              type='text'
              placeholder='John Doe'
              label='Name'
              value={name}
              onChange={handleChange}
            />
            <InputWithLabel
              id='email'
              name='email'
              type='text'
              placeholder='john@doe.com'
              label='Email address'
              value={email}
              onChange={handleChange}
            />
            <InputWithLabel
              id='body'
              name='body'
              type='text'
              placeholder='hey'
              label='Comment body'
              value={body}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-row justify-end mt-4 space-x-2'>
            <button className='px-6 py-2 font-medium text-gray-700 transition duration-300 ease-in-out bg-white border border-gray-300 rounded-md hover:border-transparent hover:bg-green-600 hover:text-white hover:shadow-lg'>
              Apply
            </button>
            <button
              className='px-6 py-2 font-normal text-gray-700 transition duration-300 ease-in-out rounded-md hover:bg-red-50 hover:text-red-500'
              onClick={resetFormState}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <CommentsList comments={comments} />
    </section>
  );
}
