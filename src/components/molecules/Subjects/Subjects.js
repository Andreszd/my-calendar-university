import Heading from '../../atoms/Heading';
import ButtonIcon from '../../molecules/ButtonIcon';

import PropTypes from 'prop-types';

import './Subjects.css';

const Subjects = ({ isShowing, setShow }) => {
  //TODO refactor classnames

  return (
    <div className="l-flex-space-between subjects">
      <Heading type="h2" textTransform="uppercase" size="md">
        Subjects of Carreer
      </Heading>
      <ButtonIcon
        onClick={() => setShow(!isShowing)}
        type="tertiary"
        icon="icon-arrow-up"></ButtonIcon>
    </div>
  );
};

Subjects.propTypes = {
  isShowing: PropTypes.bool,
  setShow: PropTypes.func,
};
export default Subjects;
