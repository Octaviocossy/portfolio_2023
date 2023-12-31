interface IProps {
  className?: string;
}

const Vercel: React.FC<IProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      stroke="currentColor"
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
    >
      <path
        clipRule="evenodd"
        d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Vercel;
