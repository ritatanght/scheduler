import { useState } from "react";

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = newMode;
        return newHistory;
      });
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
  };

  const back = () => {
    setHistory((prev) => [
      ...prev.slice(0, prev.length === 1 ? 1 : prev.length - 1),
    ]);
  };

  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;
