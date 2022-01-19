import TabHeader from 'components/atoms/TabHeader';
import PropTypes from 'prop-types';
import useHandlerActive from 'hooks/useHandlerActive';

import './Tab.css';

export default function Tab({ children, text }) {
  const { isShowing, switchShow } = useHandlerActive();

  return (
    <div className="tab">
      <TabHeader
        text={text}
        onClick={() => switchShow()}
        isShowing={isShowing}
      />
      {isShowing && <div className="tab__content">{children}</div>}
    </div>
  );
}
Tab.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

