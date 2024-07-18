import React from "react";
import Calendar, { OnClickFunc, TileArgs } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useCalendar from "../helper/useCalendar";
import Button from "@/components/button";

const MyCalendar = () => {
  const { addDate, saveDates, existsDate, removeDate } = useCalendar();

  const tileContent = ({ date, view }: TileArgs) => {
    if (view === "month" && existsDate(date)) {
      return <span>✔</span>;
    }
  };

  const handleClickDay: OnClickFunc = (value) => {
    if (existsDate(value)) {
      removeDate(value);
      return;
    }
    addDate(value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Calendar
        calendarType="gregory"
        tileContent={tileContent}
        locale="en-GB"
        onClickDay={handleClickDay}
      />
      <Button
        label="✎ Save"
        onClick={() => {
          saveDates();
        }}
      />
    </div>
  );
};

export default MyCalendar;
