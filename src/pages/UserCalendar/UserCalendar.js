import Container from 'components/layout/Container';
import WeekCalendar from 'pages/features/Calendar/WeekCalendar';

import './UserCalendar.css';
const UserCalendar = () => (
  <div className="user-calendar">
    <Container>
      <WeekCalendar />
    </Container>
  </div>
);

export default UserCalendar;
