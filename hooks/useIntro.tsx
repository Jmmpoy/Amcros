"use client";

import { useEffect, useState } from "react";

const useIntro = () => {
  const [hasTimePassed, setHasTimePassed] = useState(false);

  useEffect(() => {
    const storage = window.localStorage;
    const currTimestamp = Date.now();
    const stored = storage.getItem("timestamp");
    const timestamp = stored ? parseInt(stored, 10) : 1000;

    const timeLimit = 3 * 60 * 60 * 1000; // 3 hours
    const passed = currTimestamp - timestamp > timeLimit;

    storage.setItem(
      "timestamp",
      (passed ? currTimestamp : timestamp).toString()
    );
    setHasTimePassed(passed);
  }, []);

  return hasTimePassed;
};

export default useIntro;
