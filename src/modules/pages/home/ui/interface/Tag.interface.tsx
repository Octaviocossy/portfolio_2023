interface IProps {
  text: string;
  color: string;
}

const Tag: React.FC<IProps> = ({ text, color }) => {
  return (
    <div className={`${color} px-2 py-1 rounded-lg mb-3 mr-3 text-sm`}>
      <p>{text}</p>
    </div>
  );
};

export default Tag;
