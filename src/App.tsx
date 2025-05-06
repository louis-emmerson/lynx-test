import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";
import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const handleClick = () => {
    console.info("Button clicked");
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <view className="bg-white h-full flex flex-col  items-center justify-center">
      <text className="text-2xl text-center text-gray-900">Hello, LynxJS!</text>
      <view
        className="flex flex-col items-center justify-center mt-4 p-4 rounded-xl bg-gray-400"
        bindtap={handleClick}
      >
        <text>Click Me!</text>
        <text>{count}</text>
      </view>
    </view>
  );
}
