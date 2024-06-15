import { useState, useCallback } from "react";

const useNumberInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);
  const isNumber = useCallback((str: string) => {
    return /^[0-9]*$/.test(str);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      setIsValid(false);
      setValue(e.target.value);
      return;
    }
    setIsValid(true);
    setValue(Number(e.target.value).toString() || "0"); // 01 -> 1になる
  };

  return { value, isValid, handleChange };
};

export default useNumberInput;
