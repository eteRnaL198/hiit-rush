import { getStoredData } from "@/services/localstorage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarData } from "@/utils/types";

const generateDates = (data: CalendarData): Date[] => {
  return Object.entries(data).flatMap(([year, months]) =>
    Object.entries(months).flatMap(([month, days]) =>
      days.map((day) => new Date(Number(year), Number(month) - 1, day))
    )
  );
};

const useCalendar = () => {
  const [dates, setDates] = useState<Date[]>([]);
  const router = useRouter();
  useEffect(() => {
    const storedData = getStoredData<CalendarData>("calendar");
    if (!storedData) return;
    setDates(generateDates(storedData));
  }, [router]);

  return { dates, setDates };
};

export default useCalendar;
