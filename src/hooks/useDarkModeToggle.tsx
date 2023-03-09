import { useState } from 'react';

export const useDarkModeToggle = (initialValue: any): any => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);
  
  return {value, toggle};
}