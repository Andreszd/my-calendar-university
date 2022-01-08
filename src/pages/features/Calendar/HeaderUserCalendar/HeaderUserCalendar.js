import Button from "components/atoms/Button";
import Paragraph from "components/atoms/Paragraph";

import "./HeaderUserCalendar.css";

const HeaderUserCalendar = () => (
  <div className="header-user-calendar">
    <div></div>
    <div className="header-user-calendar__title">
      <Paragraph size="medium" weight="bold" isResetStyles={true}>
        Semester
      </Paragraph>
      <Paragraph weight="bold" color="gray" isResetStyles={true}>
        2/2021
      </Paragraph>
    </div>
    <Button>Add Subject</Button>
  </div>
);

export default HeaderUserCalendar;
