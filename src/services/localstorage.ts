import { LOCALSTORAGE_KEY } from "@/utils/constants";

export const getStoredData = <T>(key: string): T | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const storedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!storedData) return null;
  return JSON.parse(storedData)[key] as T;
};

export const updateStorage = <T>(newData: { [key: string]: T }) => {
  if (typeof window === "undefined") {
    return;
  }

  const existingData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!existingData) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newData));
    return;
  }
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ ...JSON.parse(existingData), ...newData })
  );
};
