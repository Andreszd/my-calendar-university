import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';

import PropTypes from 'prop-types';

import './HeaderSubjects.css';
import classNames from 'classnames';

const HeaderSubjects = ({ isShowing, setShow }) => {
  //TODO refactor classnames
  //TODO rename name carreer by career

  return (
    <div
      className="l-flex-space-between header-subjects"
      onClick={() => setShow(!isShowing)}>
      <Heading type="h2" textTransform="uppercase" size="md">
        Subjects of Carreer
      </Heading>
      <span
        className={classNames('header-subjects__icon ', {
          isActive: isShowing,
        })}>
        <Icon type="icon-arrow-up" size="sm" />
      </span>
    </div>
  );
};

HeaderSubjects.propTypes = {
  isShowing: PropTypes.bool,
  setShow: PropTypes.func,
};
export default HeaderSubjects;
