import SidebarUser from "./components/organism/SidebarUser";
import GridLayout from "./components/layout/GridLayout/index";

import "./styles/index.css";
import HeaderUser from "./components/organism/HeaderUser";
import WeekCalendar from "./components/molecules/WeekCalendar/WeekCalendar";

function App() {
    return (
        <GridLayout>
            <HeaderUser />
            <SidebarUser />
            <WeekCalendar />
        </GridLayout>
    );
}

export default App;
