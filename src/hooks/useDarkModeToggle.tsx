import { useState } from 'react';

export const useDarkModeToggle = (
  initialValue: boolean
): { value: boolean; toggle: () => void } => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);

  return { value, toggle };
};
