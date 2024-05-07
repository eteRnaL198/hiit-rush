type Props = {
  className?: string;
  id?: string;
  type?: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ className, id, type, value, onChange }: Props) => {
  return (
    <input
      className={`shadow-inner px-4 max-w-full border-4 border-gray-300 outline-none rounded-full ${className}`}
      id={id}
      type={type}
      inputMode="numeric"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
