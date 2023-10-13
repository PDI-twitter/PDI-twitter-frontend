type InputLabelProps = {
  label: string;
  variant: "outline" | "standart";
};

export const InputLabel: React.FC<InputLabelProps> = ({ label, variant }) => {
  return (
    <label
      className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:block before:h-1.5 before:w-2.5 before:rounded-tl-md  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500  peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${
        variant === "outline" &&
        "before:box-border before:border-t before:border-l before:border-blue-gray-200 after:border-t after:border-r after:border-blue-gray-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent"
      }`}
    >
      {label}
    </label>
  );
};
