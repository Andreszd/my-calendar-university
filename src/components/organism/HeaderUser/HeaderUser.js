import Logo from '../../atoms/Logo/Logo';
import GridHeaderLayout from '../../layout/GridHeaderLayout/GridHeaderLayout';
import UserNavbar from 'components/molecules/UserNavbar';

import './HeaderUser.css';

const HeaderUser = () => {
  return (
    <header className="header-user">
      <GridHeaderLayout>
        <Logo />
        <UserNavbar />
      </GridHeaderLayout>
    </header>
  );
};
export default HeaderUser;
