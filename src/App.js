import SidebarUser from "./components/organism/SidebarUser";
import GridLayout from "./components/layout/GridLayout/index";

import "./styles/index.css";
import HeaderUser from "./components/organism/HeaderUser";

function App() {
    return (
        <GridLayout>
            <HeaderUser />
            <SidebarUser />
        </GridLayout>
    );
}

export default App;
