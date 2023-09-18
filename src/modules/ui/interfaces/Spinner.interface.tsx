interface IProps {
  className?: string;
}

const Spinner: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={`w-8 h-8 border-4 border-primary opacity-50 border-solid rounded-full animate-spin ${className} 
        border-t-gray-800 dark:border-t-gray-400`}
    />
  );
};

export default Spinner;
