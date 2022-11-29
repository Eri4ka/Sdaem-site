import { useEffect, useState } from 'react';

export const useToggle = ({ modal = false }: { modal?: boolean }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    if (modal) {
      toggle
        ? (document.body.style.overflowY = 'hidden')
        : (document.body.style.overflowY = 'initial');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return { toggle, handleToggle };
};
