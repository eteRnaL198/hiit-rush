type Props = {
  value: string;
  setValue: (value: string) => void;
};

const TextInput = ({ value, setValue }: Props) => {
  return (
    <input
      className="shadow-inner px-4 border-4 outline-none rounded-full"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
