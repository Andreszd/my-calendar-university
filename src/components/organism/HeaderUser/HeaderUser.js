import Logo from "../../atoms/Logo/Logo";
import GridHeaderLayout from "../../layout/GridHeaderLayout/GridHeaderLayout";

import "./HeaderUser.css";

const HeaderUser = () => {
    return (
        <header className="header-user">
            <GridHeaderLayout>
                <Logo />
            </GridHeaderLayout>
        </header>
    );
};

export default HeaderUser;
