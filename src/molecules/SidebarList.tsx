import { SidebarLink } from "../atoms/SidebarLink";

type SidebarListProps = {
  list: {
    name: string;
    icon: JSX.Element;
    link: string;
  }[];
};

export const SidebarList: React.FC<SidebarListProps> = ({ list }) => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-white">
      <ul className="space-y-2 font-medium">
        {list.map((el) => (
          <li>
            <SidebarLink text={el.name} href={el.link} svg={el.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};
