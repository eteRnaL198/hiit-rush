type Props = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className="nm-flat-gray-500 rounded-full px-8 py-4 text-white font-bold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
