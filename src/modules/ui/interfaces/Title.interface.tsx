import { cn } from "@/utilities/tailwind_merge.utility";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<IProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-lg font-semibold underline-offset-4 underline",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Title;
