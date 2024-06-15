import useNumberInput from "@/hooks/useNumberInput";
import { useEffect } from "react";

type Props = {
  defaultValue: string;
  id: string;
  handleValidChange: (value: number) => void;
};

const NumberInput = ({ defaultValue, id, handleValidChange }: Props) => {
  const { value, isValid, handleChange } = useNumberInput(defaultValue);
  useEffect(() => {
    if (isValid) handleValidChange(Number(value));
  }, [value, handleValidChange, isValid]);

  return (
    <div className="flex flex-col">
      <input
        className={`shadow-inner px-4 max-w-full border-4 outline-none rounded-full ${
          isValid ? "border-gray-300" : "border-orange-400"
        }`}
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
      />
      {!isValid && (
        <p className="text-center text-orange-400 text-sm">
          数字を入力してください
        </p>
      )}
    </div>
  );
};

export default NumberInput;
