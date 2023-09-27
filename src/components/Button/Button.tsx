import './index.css'

interface IProps {
  title: string
  variant: 'primary' | 'secondary'
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<IProps> = ({onClick, title, variant, type, fullWidth}) => {
  return (
    <button className={`button-container ${variant} ${fullWidth ? 'full-width' : ''}`} type={type} onClick={onClick} >
        {title}
    </button>
  );
};

export default Button;
