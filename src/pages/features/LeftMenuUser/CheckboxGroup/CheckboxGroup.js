import { useContext } from 'react';
import Checkbox from 'components/atoms/Checkbox';

import PropTypes from 'prop-types';
import { CalendarContext } from 'provider/calendarProvider';

export default function CheckboxGroup({ group, code, subject }) {
  const { addSubject, removeSubject } = useContext(CalendarContext);
  const handlerOnChange = (evt) =>
    evt.target.checked
      ? addSubject({
          subjectName: subject.name,
          schedule: group.schedule,
          subjectCode: subject.code,
          groupCode: group.code,
        })
      : removeSubject({ subjectCode: subject.code, groupCode: group.code });

  return <Checkbox text={group.teacher} id={code} onChange={handlerOnChange} />;
}

CheckboxGroup.propTypes = {
  group: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
};
