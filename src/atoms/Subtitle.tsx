type SubtitleProps = {
  subtitle: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <p className="inline-block text-sm text-[#666] mt-0 p-0">{subtitle}</p>
  );
};
