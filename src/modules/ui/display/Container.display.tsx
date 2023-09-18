interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IProps> = ({ children, className }) => {
  return <div className={`px-4 pt-20 max-w-2xl m-auto ${className}`}>{children}</div>;
};
