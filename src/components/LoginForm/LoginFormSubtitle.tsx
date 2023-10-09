type LoginFormSubtitleProps = {
  subtitle: string;
};

export const LoginFormSubtitle: React.FC<LoginFormSubtitleProps> = ({
  subtitle,
}) => {
  return (
    <p className="inline-block text-sm text-[#666] mb-[25px]">{subtitle}</p>
  );
};
