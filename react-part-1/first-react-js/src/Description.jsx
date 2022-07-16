const Description = (props) => {
  return (
    <div className='w-1/4 px-4'>
      <h1 className='text-3xl font-semibold text-gray-400'>{props.title}</h1>
      <p className='pt-6'>{props.text}</p>
    </div>
  );
};

export default Description;
