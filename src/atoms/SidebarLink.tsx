import { useDispatch } from "react-redux";
import { AuthState, logout } from "../redux/authSlice";
import { useSelector } from "react-redux";

type SidebarLinkProps = {
  text: string;
  href: string;
  svg: JSX.Element;
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  text,
  href,
  svg,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: { auth: AuthState }) => state.auth.user);

  return (
    <a
      href={href}
      className="flex items-center p-2 text-gray-700 rounded-lg hover:text-blue-600  group"
      onClick={() => {
        text === "Logout" && dispatch(logout());
      }}
    >
      {svg}
      <span className="ml-3">{text}</span>
    </a>
  );
};
