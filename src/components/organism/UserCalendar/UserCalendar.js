import Container from "../../layout/Container/Container";
import WeekCalendar from "../../molecules/WeekCalendar/WeekCalendar";

import "./UserCalendar.css";
const UserCalendar = () => (
    <div className="user-calendar">
        <Container>
            <WeekCalendar />
        </Container>
    </div>
);

export default UserCalendar;
