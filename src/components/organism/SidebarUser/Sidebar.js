import Subjects from '../../molecules/Subjects/Subjects';
import UserProfile from '../../molecules/UserProfile/UserProfile';

import useHandlerSubjects from '../../../hooks/useHandlerSubjects';

import './Sidebar.css';

const SidebarUser = () => {
  const { isShowing, setShow } = useHandlerSubjects(false);

  return (
    <div className="sidebar">
      {isShowing ? <UserProfile /> : null}
      <Subjects isShowing={isShowing} setShow={setShow} />
    </div>
  );
};

export default SidebarUser;
