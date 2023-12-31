interface IProps {
  className?: string;
}

const LinkIcon: React.FC<IProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      stroke="currentColor"
      fill="currentColor"
      width="1em"
      height="1em"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <path d="M15 3h6v6"></path>
        <path d="M10 14L21 3"></path>
      </g>
    </svg>
  );
};

export default LinkIcon;
