interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IProps> = ({ children, className }) => {
  return <div className={`px-4 max-w-3xl m-auto ${className}`}>{children}</div>;
};
