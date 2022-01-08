import SidebarUser from "./pages/features/LeftMenuUser/SidebarUser";
import GridLayout from "./components/layout/GridLayout/index";
import HeaderUser from "./components/organism/HeaderUser";
import UserCalendar from "pages/UserCalendar";

import { CalendarProvider } from "./provider/calendarProvider";

import "./styles/index.css";

function App() {
  return (
    <GridLayout>
      <HeaderUser />
      <CalendarProvider>
        <SidebarUser />
        <UserCalendar />
      </CalendarProvider>
    </GridLayout>
  );
}

export default App;
