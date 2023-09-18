import NextLink, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  children: React.ReactNode;
  isCurrent?: boolean
}

const Link: React.FC<IProps> = ({ children, isCurrent, ...props }) => {
  return (
    <NextLink {...props} className={`font-semibold ${isCurrent && 'underline'}`}>
      {children}
    </NextLink>
  );
};

export default Link;
