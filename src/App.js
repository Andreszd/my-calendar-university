import SidebarUser from "./components/organism/SidebarUser";
import GridLayout from "./components/layout/GridLayout/index";

import "./styles/index.css";
import HeaderUser from "./components/organism/HeaderUser";
import UserCalendar from "./components/organism/UserCalendar/UserCalendar";

function App() {
    return (
        <GridLayout>
            <HeaderUser />
            <SidebarUser />
            <UserCalendar />
        </GridLayout>
    );
}

export default App;
