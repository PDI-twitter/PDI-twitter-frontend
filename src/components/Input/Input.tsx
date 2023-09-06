import './index.css'

interface IProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string
  type?: string;
}

const Input: React.FC<IProps> = ({ name, label, value, onChange, type, placeholder }) => {
  return (
    <div className="input-container">
      <input className="input" name={name} value={value} onChange={onChange} type={type} autoComplete="off" required placeholder={placeholder} />
      <label className="label" htmlFor="name">
        <span className="input-span">{label}</span>
      </label>
    </div>
  );
};

export default Input;
