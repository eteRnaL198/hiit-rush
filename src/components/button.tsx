type Props = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className=" bg-gray-200 shadow-lg rounded-full px-8 py-4 font-bold"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
