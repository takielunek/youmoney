import { useState, useEffect } from "react";
export function useWindowSize() {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    const isClient = typeof window === "object";

    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize({
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
