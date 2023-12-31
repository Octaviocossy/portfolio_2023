import { cn } from "@/utilities/tailwind_merge.utility";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "px-4 pt-[6rem] max-w-xl m-auto flex flex-col space-y-12 mb-[15rem]",
        className
      )}
    >
      {children}
    </main>
  );
};
