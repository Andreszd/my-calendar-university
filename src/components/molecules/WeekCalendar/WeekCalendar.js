import HeaderCalendar from "../../atoms/HeaderCalendar/HeaderCalendar";
import HoursCalendar from "../../atoms/HoursCalendar/HoursCalendar";
import CardCalendar from "../../atoms/CardCalendar";
import GridCalendar from "../../layout/GridCalendar/GridCalendar";

import { calendarKeys, calendarValues } from "./constants";
import { parseToString } from "../../../libs/toString";

import "./WeekCalendar.css";

const WeekCalendar = () => {
    return (
        <div className="week-calendar">
            <GridCalendar>
                <HeaderCalendar />
                <HoursCalendar />
                {calendarValues.map((day, idxCol) => {
                    const { periodsDay } = day;
                    return periodsDay.map((segmentHour, idxRow) => (
                        <CardCalendar
                            key={`${calendarKeys[idxCol]}-${segmentHour.start}:${segmentHour.end}`}
                            row={parseToString(idxRow + 2)}
                            col={parseToString(idxCol + 2)}
                        >
                            {segmentHour.start} - {segmentHour.end}
                        </CardCalendar>
                    ));
                })}
            </GridCalendar>
        </div>
    );
};

export default WeekCalendar;
