import Container from 'components/layout/Container';
import HeaderUserCalendar from 'pages/features/Calendar/HeaderUserCalendar';
import WeekCalendar from 'pages/features/Calendar/WeekCalendar';

import './UserCalendar.css';
const UserCalendar = () => (
  <div className="user-calendar">
    <Container>
      <HeaderUserCalendar />
      <WeekCalendar />
    </Container>
  </div>
);

export default UserCalendar;
