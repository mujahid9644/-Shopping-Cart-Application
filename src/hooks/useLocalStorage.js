import { useState, useEffect } from "react";

/**
 * Like useState, but the value is persisted in localStorage.
 * Falls back to `initialValue` if nothing is stored or storage is unavailable.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or blocked - ignore */
    }
  }, [key, value]);

  return [value, setValue];
}
