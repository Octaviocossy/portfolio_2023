import { cn } from "@/utilities/tailwind_merge.utility";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Tag: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={cn("px-2 py-1 rounded-lg mb-3 mr-3 text-sm", className)}>
      {children}     
    </div>
  );
};

export default Tag;
