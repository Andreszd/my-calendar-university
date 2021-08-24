import Container from "../../layout/Container/";
import HeaderUserCalendar from "../../molecules/HeaderUserCalendar/";
import WeekCalendar from "../../molecules/WeekCalendar/";

import "./UserCalendar.css";
const UserCalendar = () => (
    <div className="user-calendar">
        <Container>
            <HeaderUserCalendar />
            <WeekCalendar />
        </Container>
    </div>
);

export default UserCalendar;
