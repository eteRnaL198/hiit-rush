import { getStoredData } from "@/services/localstorage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarData } from "@/utils/types";
import { updateStorage } from "@/services/localstorage";

const useCalendar = () => {
  const [calendarData, setCalendarData] = useState<CalendarData>([]);
  const router = useRouter();
  useEffect(() => {
    const storedData = getStoredData<CalendarData>("calendar");
    if (!storedData) return;
    setCalendarData(storedData);
  }, [router]);

  const addDate = (date: Date): void => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるので1を足す
    const day = date.getDate();

    if (!calendarData[year]) {
      calendarData[year] = {};
    }
    if (!calendarData[year][month]) {
      calendarData[year][month] = [];
    }
    if (!calendarData[year][month].includes(day)) {
      calendarData[year][month].push(day);
      calendarData[year][month].sort((a, b) => a - b);
    }
  };

  const removeDate = (date: Date): void => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるので1を足す
    const day = date.getDate();

    if (!calendarData[year] || !calendarData[year][month]) {
      return;
    }

    const dayIndex = calendarData[year][month].indexOf(day);
    if (dayIndex === -1) {
      return;
    }
    calendarData[year][month].splice(dayIndex, 1);

    if (calendarData[year][month].length === 0) {
      delete calendarData[year][month];
    }
    if (Object.keys(calendarData[year]).length === 0) {
      delete calendarData[year];
    }
  };

  const existsDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるので1を足す
    const day = date.getDate();
    return calendarData[year]?.[month]?.includes(day) ?? false;
  };

  const saveDates = () => {
    updateStorage<CalendarData>({ calendar: calendarData });
  };

  return { addDate, existsDate, removeDate, saveDates };
};

export default useCalendar;
