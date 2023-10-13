import { useState } from "react";
import { sidebarRoutesList } from "../../static/sidebar";
import { SidebarButton } from "./SidebarButton";
import { SidebarList } from "./SidebarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../Logo/Logo";

type SideBarProps = {};

export const Sidebar: React.FC<SideBarProps> = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toogleSidebarVisibility = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <SidebarButton toogleSidebarVisibility={toogleSidebarVisibility} />

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full  border-r-2 border-gray-200 sm:translate-x-0 ${
          isOpen && "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        {isOpen && (
          <SidebarButton toogleSidebarVisibility={toogleSidebarVisibility} />
        )}
        <div className="m-4">
          <Logo />
        </div>
        <SidebarList list={sidebarRoutesList} />
      </aside>
    </>
  );
};
