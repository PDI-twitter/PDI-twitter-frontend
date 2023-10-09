interface IProps {
  title: string;
  type?: "button" | "submit" | "reset";
  variant?: "standart" | "outlined";
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IProps> = ({ onClick, title, variant, type }) => {
  const variantObj = {
    standart:
      "middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
    outlined:
      "middle none center rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
  };

  const setVariant = () => {
    if (variant === "outlined") {
      return variantObj.outlined;
    }
    return variantObj.standart;
  };

  return (
    <button className={setVariant()} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
