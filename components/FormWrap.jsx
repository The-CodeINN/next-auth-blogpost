const FormWrap = ({ children }) => {
  return (
    <div
      className='
    min-h-fit
    h-full
    flex
    items-center
    justify-center
    w-full
    border-red-500
    px-8
    md:px-64
    '
    >
      <div
        className='    
      flex
      flex-col
      gap-6
      items-center
      shadow-md
    shadow-neutral-300
      rounded-md
      p-4
      md:p-8
    w-full
      '
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
