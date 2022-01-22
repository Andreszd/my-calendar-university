import SidebarUser from './pages/features/LeftMenuUser/SidebarUser';
import GridLayout from './components/layout/GridLayout/index';
import HeaderUser from './components/organism/HeaderUser';
import UserCalendar from 'pages/UserCalendar';

import { CalendarProvider } from './provider/calendarProvider';
import useHandlerActive from 'hooks/useHandlerActive';

import './styles/index.css';

function App() {
  const { isShowing, switchShow } = useHandlerActive(false);
  return (
    <GridLayout>
      <HeaderUser switchShow={switchShow} />
      <CalendarProvider>
        <SidebarUser isShowing={isShowing} />
        <UserCalendar />
      </CalendarProvider>
    </GridLayout>
  );
}

export default App;
