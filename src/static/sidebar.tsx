import {
  faHouse,
  faUser,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sidebarRoutesList = [
  {
    name: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "#",
  },
  {
    name: "Explore",
    icon: <FontAwesomeIcon icon={faHashtag} />,
    link: "#",
  },
  {
    name: "Notifications",
    icon: <FontAwesomeIcon icon={faBell} />,
    link: "#",
  },
  {
    name: "Messages",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    link: "#",
  },
  {
    name: "Bookmarks",
    icon: <FontAwesomeIcon icon={faBookmark} />,
    link: "#",
  },
  {
    name: "Lists",
    icon: <FontAwesomeIcon icon={faList} />,
    link: "",
  },
  {
    name: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
    link: "",
  },
  {
    name: "Logout",
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    link: "",
  },
];
