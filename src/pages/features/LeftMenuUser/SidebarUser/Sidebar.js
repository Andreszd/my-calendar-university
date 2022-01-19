import SubjectsOfCarrer from '../SubjectsOfCarreer';
import SelectedSubjectsGroup from 'pages/features/LeftMenuUser/SelectedSubjectsGroup';
import TransitionComponent from 'hoc/TransitionComponent';

import useHandlerActive from 'hooks/useHandlerActive';

import './Sidebar.css';

const SidebarUser = () => {
  const { isShowing, switchShow } = useHandlerActive(false);

  return (
    <div className="sidebar">
      <SelectedSubjectsGroup />
      <SubjectsOfCarrer isShowing={isShowing} setShow={switchShow} />
    </div>
  );
};

export default SidebarUser;
