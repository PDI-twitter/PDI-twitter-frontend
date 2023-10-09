import { Input } from "./Input";
import { InputLabel } from "./InputLabel";

interface IProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
}

export const TextInput: React.FC<IProps> = ({
  name,
  label,
  value,
  onChange,
  type,
}) => {
  return (
    <div className="w-full">
      <div className="relative h-10 w-full min-w-[200px]">
        <Input name={name} type={type} onChange={onChange} value={value} />
        <InputLabel label={label} />
      </div>
    </div>
  );
};
