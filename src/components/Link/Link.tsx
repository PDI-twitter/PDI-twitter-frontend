type LinkProps = {
  label: string;
  href?: string;
};

export const Link: React.FC<LinkProps> = ({ label, href }) => {
  return (
    <a
      className="w-fit flex text-[13px] text-[#555] transition-all duration-[linear] delay-[160ms] hover:text-[#1DA1F2]"
      href={href}
    >
      {label}
    </a>
  );
};
