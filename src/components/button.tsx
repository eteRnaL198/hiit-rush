type Props = {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ label, className, disabled, onClick }: Props) => {
  return (
    <button
      className={` bg-gray-300 shadow-lg rounded-full px-8 py-2  hover:bg-gray-400 hover:shadow-none disabled:bg-gray-400 disabled:shadow-none disabled:text-gray-200 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
