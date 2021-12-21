import { useState } from 'react';

export default function useHandlerSubjects(state = false) {
  const [isShowing, setShow] = useState(state);

  return { isShowing, setShow };
}
