import SubjectsOfCarrer from "../SubjectsOfCarreer";
import UserProfile from "components/molecules/UserProfile";
import TransitionComponent from "hoc/TransitionComponent";

import useHandlerActive from "hooks/useHandlerActive";

import "./Sidebar.css";

const SidebarUser = () => {
  const { isShowing, switchShow } = useHandlerActive(false);

  return (
    <div className="sidebar">
      <TransitionComponent isMounted={isShowing}>
        <UserProfile />
      </TransitionComponent>
      <SubjectsOfCarrer isShowing={isShowing} setShow={switchShow} />
    </div>
  );
};

export default SidebarUser;
