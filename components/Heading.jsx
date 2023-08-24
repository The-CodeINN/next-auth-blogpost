const Heading = ({ heading, description }) => {
  return (
    <div className='mb-8 space-y-4'>
      <h2 className='text-2xl md:text-4xl font-bold text-center'>{heading}</h2>
      <p className='text-neutral-900 font-light text-sm md:text-lg text-center'>
        {description}
      </p>
    </div>
  );
};

export default Heading;
