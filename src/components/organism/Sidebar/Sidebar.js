import Logo from "../../atoms/Logo";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import HeaderSidebar from "../../layout/HeaderSidebar/HeaderSidebar";

import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <HeaderSidebar>
                <Logo />
            </HeaderSidebar>
            <Paragraph size="big" isInline={true} weight="medium">
                Hola mundo
            </Paragraph>
        </div>
    );
};

export default Sidebar;
