import { useState } from 'React';

import Heading from '../../atoms/Heading';
import ButtonIcon from '../../molecules/ButtonIcon';

import './Subjects.css';
const Subjects = () => (
  //TODO refactor classnames
  <div className="l-flex-space-between">
    <Heading type="h2" textTransform="uppercase" size="md">
      Subjects of Carreer
    </Heading>
    <ButtonIcon
      onClick={handlerOnClick}
      type="tertiary"
      icon="icon-arrow-up"></ButtonIcon>
  </div>
);

export default Subjects;
