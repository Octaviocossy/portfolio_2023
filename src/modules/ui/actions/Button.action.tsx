import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`border dark:border-gray-800 shadow-sm p-2 rounded-lg 
        hover:bg-gray-100 hover:dark:bg-gray-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
