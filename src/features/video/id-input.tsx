import { useState } from "react";

type Props = {
  id: string;
  defaultValue: number;
  setNumber: (value: number) => void;
  setIsValid: (value: boolean) => void;
};

const IdInput = ({ id, defaultValue, setIsValid, setNumber }: Props) => {
  const [text, setText] = useState(defaultValue.toString());
  const [isTextValid, setIsTextValid] = useState(true);
  const isNumber = (value: string) => value !== "" && !isNaN(Number(value));

  return (
    <div className="flex flex-col">
      <input
        className={`shadow-inner px-4 max-w-full border-4 outline-none rounded-full ${
          isTextValid ? "border-gray-300" : "border-orange-400"
        }`}
        id={id}
        type="text"
        inputMode="numeric"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (isNumber(e.target.value)) {
            setIsTextValid(true);
            setIsValid(true);
            setNumber(Number(e.target.value));
          } else {
            setIsTextValid(false);
            setIsValid(false);
          }
        }}
      />
      {!isTextValid && (
        <p className="text-center text-orange-400 text-sm">
          数字を入力してください
        </p>
      )}
    </div>
  );
};

export default IdInput;
