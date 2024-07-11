type Props = {
  label: string;
  className?: string;
  onClick: () => void;
};

const Button = ({ label, className, onClick }: Props) => {
  return (
    <button
      className={` bg-gray-300 shadow-lg rounded-full px-8 py-4 ${className}  hover:bg-gray-400 hover:shadow-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
