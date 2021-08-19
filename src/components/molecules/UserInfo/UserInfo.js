import Paragraph from "../../atoms/Paragraph/Paragraph";

import "./UserInfo.css";
//TODO: considerate rename component
const UserInfo = () => {
    return (
        <div className="user-info">
            <Paragraph size="medium" weight="bold" isResetStyles={true}>
                Username
            </Paragraph>
            <Paragraph size="small" weight="medium" isResetStyles={true}>
                nickname@correo.com
            </Paragraph>
        </div>
    );
};

export default UserInfo;
