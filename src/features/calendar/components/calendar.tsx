import React from "react";
import Calendar, { TileArgs } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useCalendar from "../helper/useCalendar";

const MyCalendar = () => {
  const { dates } = useCalendar();

  const tileContent = ({ date, view }: TileArgs) => {
    if (
      view === "month" &&
      dates.some((d) => d.toDateString() === date.toDateString())
    ) {
      return <span>✔</span>;
    }
  };

  return (
    <div className="flex justify-center">
      <Calendar
        calendarType="gregory"
        tileContent={tileContent}
        locale="en-GB"
      />
    </div>
  );
};

export default MyCalendar;
