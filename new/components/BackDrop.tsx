type BackDropProps = {
  onClick: () => void;
};

const BackDrop = ({ onClick }: BackDropProps) => {
  return (
    <div
      className='
    fixed
    top-0
    left-0
    w-screen
    h-screen
    z-20
    backdrop-blur-sm
  '
      onClick={onClick}
    ></div>
  );
};

export default BackDrop;
