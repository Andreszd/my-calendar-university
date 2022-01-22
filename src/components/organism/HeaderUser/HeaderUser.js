import Logo from '../../atoms/Logo/Logo';
import Hamburguer from 'components/atoms/Hamburguer';
import GridHeaderLayout from '../../layout/GridHeaderLayout/GridHeaderLayout';
import UserNavbar from 'components/molecules/UserNavbar';

import PropTypes from 'prop-types';

import './HeaderUser.css';

const HeaderUser = ({ switchShow }) => {
  return (
    <header className="header-user">
      <GridHeaderLayout>
        <Hamburguer onClick={() => switchShow()} />
        <Logo />
        <UserNavbar />
      </GridHeaderLayout>
    </header>
  );
};
export default HeaderUser;

HeaderUser.propTypes = {
  switchShow: PropTypes.func,
};
