import { LOCALSTORAGE_KEY } from "@/utils/constants";

export const getStoredData = <T>(): T | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const storedData = localStorage.getItem(LOCALSTORAGE_KEY);
  return storedData ? (JSON.parse(storedData) as T) : null;
};

export const writeToStorage = (data: any) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
