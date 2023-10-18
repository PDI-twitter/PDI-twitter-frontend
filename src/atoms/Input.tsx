type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  variant: "standart" | "outline";
};

export const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  type,
  variant,
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={`peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all disabled:bg-blue-gray-50 ${
        variant === "outline" &&
        "border border-blue-gray-200 border-t-transparent  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
      }`}
      placeholder=" "
    />
  );
};
