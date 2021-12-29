import { useState } from 'react';

//TODO refactor do hook generic
export default function useHandlerActive(state = false) {
  const [isShowing, setShow] = useState(state);

  const switchShow = () => setShow(!isShowing);

  return { isShowing, switchShow };
}
