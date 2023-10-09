type LinkProps = {
  label: string;
  href?: string;
};

export const Link: React.FC<LinkProps> = ({ label, href }) => {
  return (
    <a
      className="w-fit flex text-[13px] text-[#555] transition-all duration-[linear] delay-[160ms] mt-2.5 mb-5 mx-0 hover:text-[#1DA1F2]"
      href={href}
    >
      {label}
    </a>
  );
};
