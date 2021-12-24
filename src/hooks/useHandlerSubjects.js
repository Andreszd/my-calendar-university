import { useState } from 'react';

//TODO refactor do hook generic
export default function useHandlerSubjects(state = false) {
  const [isShowing, setShow] = useState(state);

  return { isShowing, setShow };
}
