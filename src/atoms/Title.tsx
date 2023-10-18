type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="font-medium text-[2.3em] m-0 p-0">{title}</h1>;
};
