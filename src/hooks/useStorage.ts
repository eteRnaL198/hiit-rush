import { useEffect, useState } from "react";
import { getStoredData, writeToStorage } from "@/services/localstorage";

const useStorage = <T>(initialValue: T) => {
  const storedData = getStoredData<T>();
  const [value, setValue] = useState<T>(storedData ? storedData : initialValue);
  useEffect(() => {
    writeToStorage(value);
  }, [value]);
  return { value, setValue };
};

export default useStorage;
