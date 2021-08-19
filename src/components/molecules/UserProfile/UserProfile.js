import Picture from "../../atoms/Picture/Picture";
import UserInfo from "../UserInfo/UserInfo";

import logo from "../../../assets/images/avatar.svg";

import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className="user-profile">
            <Picture src={logo} width={70} height={70} />
            <UserInfo />
        </div>
    );
};

export default UserProfile;
