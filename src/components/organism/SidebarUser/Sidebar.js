import Subjects from "../../molecules/Subjects/Subjects";
import UserProfile from "../../molecules/UserProfile/UserProfile";

import "./Sidebar.css";

const SidebarUser = () => {
    return (
        <div className="sidebar">
            <UserProfile />
            <Subjects />
        </div>
    );
};

export default SidebarUser;
