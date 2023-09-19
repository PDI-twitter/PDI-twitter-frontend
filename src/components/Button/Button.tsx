import './index.css'

interface IProps {
    title: string
    variant: 'primary' | 'secondary'
    type?: "button" | "submit" | "reset"
    fullWidth?: boolean
}

const Button: React.FC<IProps> = ({title, variant, type, fullWidth}) => {
  return (
    <button className={`button-container ${variant} ${fullWidth ? 'full-width' : ''}`} type={type} >
        {title}
    </button>
  );
};

export default Button;
