import dumbell from "../assets/dumbbell.png";
import { useNavigate } from "react-router";

export default function NavMenu() {
  const nav = useNavigate();
  return (
    <view className="w-full h-20 bg-white flex justify-between items-center pl-8 pr-8 pb-2">
      <text bindtap={() => nav("/")} className="text-black">
        Home
      </text>
      <text bindtap={() => nav("/training")} className="text-black">
        Training
      </text>
      <text bindtap={() => nav("/nutrition")} className="text-black">
        Nutrition
      </text>
    </view>
  );
}
