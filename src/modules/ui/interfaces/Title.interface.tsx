interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<IProps> = ({children, className}) => {
  return <p className={`${className} text-lg font-semibold underline-offset-4 underline`}>{children}</p>;
};

export default Title;
