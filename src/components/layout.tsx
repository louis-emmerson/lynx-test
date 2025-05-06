import NavMenu from "./nav-menu.js";
import { TopBar } from "./top-bar.js";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <view className="h-full w-full  flex flex-col justify-between">
      <TopBar />
      <view className="h-full">{children}</view>
      <NavMenu />
    </view>
  );
}
