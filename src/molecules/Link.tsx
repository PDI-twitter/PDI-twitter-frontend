import { useState } from "react";
import { SvgLink } from "../atoms/SvgLink";

type LinkProps = {
  label?: string | number;
  svg?: JSX.Element;
  href?: string;
  rotateSVG?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  label,
  href,
  svg,
  rotateSVG = false,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <a
      className="w-fit flex items-center text-[13px] text-[#555] hover:text-[#1DA1F2] cursor-pointer"
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {svg && <SvgLink path={svg} isHover={isHover} rotate={rotateSVG} />}
      {label && <span className="ml-1">{label}</span>}
    </a>
  );
};
