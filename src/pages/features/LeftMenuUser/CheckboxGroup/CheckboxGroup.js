import { useContext, useState, useEffect } from 'react';
import Checkbox from 'components/atoms/Checkbox';

import PropTypes from 'prop-types';
import { CalendarContext } from 'provider/calendarProvider';

export default function CheckboxGroup({ group, code, subject }) {
  const [isChecked, setIsChecked] = useState(false);
  const { addSubject, removeSubject, getSubjectById } =
    useContext(CalendarContext);

  useEffect(() => {
    const finded = getSubjectById({
      subjectCode: subject.code,
      groupCode: group.code,
    });
    if (finded) setIsChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = () => {
    if (!isChecked) {
      addSubject({
        subjectName: subject.name,
        schedule: group.schedule,
        subjectCode: subject.code,
        groupCode: group.code,
      });
    } else {
      removeSubject({ subjectCode: subject.code, groupCode: group.code });
    }
    setIsChecked(!isChecked);
  };
  return (
    <Checkbox
      text={group.teacher}
      id={code}
      isChecked={isChecked}
      onChange={handleOnChange}
    />
  );
}
CheckboxGroup.propTypes = {
  group: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
};
