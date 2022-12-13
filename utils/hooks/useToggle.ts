import { useEffect, useState, useCallback } from 'react';

type useToggleProps = {
  modal?: boolean;
};

export const useToggle = ({ modal = false }: useToggleProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    if (modal) {
      toggle
        ? (document.body.style.overflowY = 'hidden')
        : (document.body.style.overflowY = 'initial');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const handleToggle = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);

  return { toggle, handleToggle };
};
