import Container from "components/layout/Container";
import HeaderUserCalendar from "pages/feature/Calendar/HeaderUserCalendar";
import WeekCalendar from "pages/feature/Calendar/WeekCalendar";

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
