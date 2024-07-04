import { useState, useCallback } from "react";

const useNumberInput = (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [isValid, setIsValid] = useState(true);
  const isNumber = useCallback((str: string) => {
    return /^[0-9]*$/.test(str);
  }, []);

  const setIfNumber = useCallback(
    (txt: string) => {
      if (!isNumber(txt)) {
        setIsValid(false);
        setValue(txt);
        return;
      }
      setIsValid(true);
      setValue(Number(txt).toString() || "0"); // 01 -> 1になる
    },
    [isNumber]
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIfNumber(e.target.value);
  };
  const setNumber = useCallback(
    (txt: string) => {
      setIfNumber(txt);
    },
    [setIfNumber]
  );

  return { value, isValid, handleChange, setNumber };
};

export default useNumberInput;
