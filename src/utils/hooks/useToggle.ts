import { useEffect, useState, useCallback, useRef } from 'react';

type useToggleProps = {
  modal?: boolean;
};

export const useToggle = ({ modal = false }: useToggleProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal) {
      toggle
        ? (document.body.style.overflowY = 'hidden')
        : (document.body.style.overflowY = 'initial');
    }
  }, [toggle, modal]);

  useEffect(() => {
    if (!modal) {
      const listener = (e: MouseEvent) => {
        if (
          triggerRef.current &&
          !triggerRef?.current?.contains(e.target as HTMLDivElement) &&
          !innerRef?.current?.contains(e.target as HTMLDivElement)
        ) {
          setToggle(false);
        }
      };
      document.addEventListener('click', listener);

      return () => {
        document.removeEventListener('click', listener);
      };
    }
  }, [modal]);

  const handleToggle = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);

  return { toggle, handleToggle, triggerRef, innerRef };
};
