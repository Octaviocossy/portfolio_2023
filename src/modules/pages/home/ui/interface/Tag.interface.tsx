interface IProps {
  text: string;
  className: string;
}

const Tag: React.FC<IProps> = ({ text, className }) => {
  return (
    <div className={`${className} px-2 py-1 rounded-lg mb-3 mr-3 text-sm`}>
      <p>{text}</p>
    </div>
  );
};

export default Tag;
