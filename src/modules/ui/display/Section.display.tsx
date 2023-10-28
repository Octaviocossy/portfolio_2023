interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<IProps> = ({ children, className }) => {
  return (
    <section className={`flex flex-col space-y-3 ${className}`}>
      {children}
    </section>
  );
};
