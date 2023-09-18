import NextLink, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  children: React.ReactNode;
  isCurrent?: boolean;
  className?: string;
  target?: string;
}

const Link: React.FC<IProps> = (props) => {
  const { children, isCurrent, className, ...rest } = props;

  return (
    <NextLink
      {...rest}
      className={`font-semibold ${isCurrent && "underline"} ${className}`}
    >
      {children}
    </NextLink>
  );
};

export default Link;
