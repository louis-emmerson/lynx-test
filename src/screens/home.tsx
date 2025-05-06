import { useState } from "react";
import "../App.css";

export function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked!");
  };

  return (
    <view className="bg-blue-200 h-full flex flex-col justify-around">
      <view>
        <text className="text-3xl text-black text-center pt-4">
          Welcome to the Home Screen
        </text>
        <view className="flex justify-center items-center h-full">
          <text className="text-xl">This is the home screen of your app.</text>
        </view>
      </view>
      <view>
        <view bindtap={handleClick} className="bg-slate-600 p-4">
          <text>Tap Me!</text>
          <text>{count}</text>
        </view>
        <view bindtap={() => setCount(0)} className="bg-red-200 p-4">
          <text className="text-black"> Reset</text>
        </view>
      </view>
    </view>
  );
}
