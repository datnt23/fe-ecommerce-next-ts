"use client";

import { useScroll } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

// ----------------------------------------------------------------------

type ReturnType = boolean;

const useOffSetTop = (top = 0): ReturnType => {
  const { scrollY } = useScroll();

  const [value, setValue] = useState(false);

  const onOffSetTop = useCallback(() => {
    scrollY.on("change", (scrollHeight) => {
      if (scrollHeight > top) {
        setValue(true);
      } else {
        setValue(false);
      }
    });
  }, [scrollY, top]);

  useEffect(() => {
    onOffSetTop();
  }, [onOffSetTop]);

  const memoizedValue = useMemo(() => value, [value]);

  return memoizedValue;
};

export default useOffSetTop;
