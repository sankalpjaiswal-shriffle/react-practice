import { useState, useRef } from "react";

export default function Timer() {
  let initialValue = 10;
  const [seconds, setSeconds] = useState(initialValue);
  const ref = useRef(null);

  const start = () => {
    if (ref.current) return;

    ref.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev < 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const reset = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
      setSeconds(10);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <p>{seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
