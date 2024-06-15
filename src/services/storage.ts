import { LOCALSTORAGE_KEY } from "@/utils/constants";

export const saveData = <T>(data: T) => {
  const loadedData: T = loadData();
  if (loadedData) {
    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({ ...loadedData, ...data })
    );
    return;
  }
};

export const loadData = () => {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  return data ? JSON.parse(data) : null;
};
