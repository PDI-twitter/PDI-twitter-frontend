type HeaderProps = {
  name: string;
};

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="p-4 border-solid border-b-2 border-gray-200">
      <p className="font-medium text-gray-700">{name}</p>
    </div>
  );
};
