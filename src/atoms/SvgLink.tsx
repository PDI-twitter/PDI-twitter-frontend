type LinkProps = {
  path: JSX.Element;
  isHover: boolean;
  rotate?: boolean;
};

export const SvgLink: React.FC<LinkProps> = ({ path, isHover, rotate }) => {
  return (
    <svg
      className={rotate ? "rotate-90" : ""}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      fill={isHover ? "#1DA1F2" : "#555"}
    >
      {path}
    </svg>
  );
};
