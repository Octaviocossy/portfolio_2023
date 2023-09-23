interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IProps> = ({ children, className }) => {
  return <main className={`px-4 pt-[6rem] max-w-xl m-auto flex flex-col space-y-12 ${className}`}>{children}</main>;
};
