import { cn } from "@/utilities/tailwind_merge.utility";
import NextLink, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  children: React.ReactNode;
  isCurrent?: boolean;
  className?: string;
  target?: string;
}

const Link: React.FC<IProps> = (props) => {
  const { isCurrent, className, ...rest } = props;

  return (
    <NextLink
      {...rest}
      className={cn("font-semibold", { underline: isCurrent }, className)}
    />
  );
};

export default Link;
