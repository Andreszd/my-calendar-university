import { useState } from 'react';

import SubjectsOfCarrer from '../SubjectsOfCarreer';
import Careers from '../Careers';
import SelectedSubjectsGroup from 'pages/features/LeftMenuUser/SelectedSubjectsGroup';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Sidebar.css';

const SidebarUser = ({ isShowing }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const removeCareer = () => setSelectedCareer(null);

  return (
    <div className={classNames('sidebar', { 'is-active': isShowing })}>
      {!selectedCareer && <Careers selectCareer={setSelectedCareer} />}
      {selectedCareer && <SelectedSubjectsGroup />}
      {selectedCareer && (
        <SubjectsOfCarrer
          selectedCareer={selectedCareer}
          removeCareer={removeCareer}
        />
      )}
    </div>
  );
};

export default SidebarUser;

SidebarUser.propTypes = {
  isShowing: PropTypes.bool,
};
