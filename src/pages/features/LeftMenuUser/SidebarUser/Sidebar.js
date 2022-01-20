import { useState } from 'react';

import SubjectsOfCarrer from '../SubjectsOfCarreer';
import Careers from '../Careers';
import SelectedSubjectsGroup from 'pages/features/LeftMenuUser/SelectedSubjectsGroup';

import './Sidebar.css';

const SidebarUser = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const removeCareer = () => setSelectedCareer(null);

  return (
    <div className="sidebar">
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
