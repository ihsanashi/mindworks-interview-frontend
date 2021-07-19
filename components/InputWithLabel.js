export default function InputWithLabel({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  label,
}) {
  return (
    <div
      className={`relative ${
        name === 'body' ? 'col-span-2 md:col-span-1' : ''
      }`}
    >
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600'
      />
      <label
        htmlFor={name}
        className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
      >
        {label}
      </label>
    </div>
  );
}
