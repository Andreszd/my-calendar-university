import { useContext } from 'react';
import Checkbox from 'components/atoms/Checkbox';

import PropTypes from 'prop-types';
import { CalendarContext } from 'provider/calendarProvider';

export default function CheckboxGroup({ group, code, subject }) {
  const { addSubject, removeSubject, getSubjectById } =
    useContext(CalendarContext);

  const isChecked = () => {
    const finded = getSubjectById({
      subjectCode: subject.code,
      groupCode: group.code,
    });
    return finded ? true : false;
  };

  const handleOnChange = (evt) => {
    if (evt.target.checked) {
      addSubject({
        subjectName: subject.name,
        schedule: group.schedule,
        subjectCode: subject.code,
        groupCode: group.code,
      });
    } else {
      removeSubject({ subjectCode: subject.code, groupCode: group.code });
    }
  };
  return (
    <Checkbox
      text={group.teacher}
      id={code}
      isChecked={isChecked()}
      onChange={handleOnChange}
    />
  );
}
CheckboxGroup.propTypes = {
  group: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
};
