import Picture from "../../atoms/Picture/Picture";
import UserInfo from "../UserInfo/UserInfo";
import ButtonIcon from "../ButtonIcon";
import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className="user-profile">
            <Picture src="/assets/images/avatar.svg" width={70} height={70} />
            <UserInfo />
            <ButtonIcon type="quaternary" />
        </div>
    );
};

export default UserProfile;
