import { useEffect, useState } from "react";

const useLocalstorage = <T>(key: string, initialValue: T) => {
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };
  const [value, setValue] = useState<T>(getStoredValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return { value, setValue };
};

export default useLocalstorage;
