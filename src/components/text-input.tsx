type Props = {
  id: string;
  value: string;
  setValue: (value: string) => void;
};

const TextInput = ({ id, value, setValue }: Props) => {
  return (
    <input
      className="shadow-inner px-4 border-4 outline-none rounded-full"
      id={id}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
