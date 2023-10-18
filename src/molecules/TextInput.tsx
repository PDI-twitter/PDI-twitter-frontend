import { Input } from "../atoms/Input";
import { InputLabel } from "../atoms/InputLabel";

interface IProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  variant?: "outline" | "standart";
}

export const TextInput: React.FC<IProps> = ({
  name,
  label,
  value,
  onChange,
  type,
  variant = "outline",
}) => {
  return (
    <div className="w-full">
      <div className="relative h-10 w-full ">
        <Input
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          variant={variant}
        />
        <InputLabel label={label} variant={variant} />
      </div>
    </div>
  );
};
