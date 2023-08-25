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
      shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
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
