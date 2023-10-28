interface IProps {
  name: string;
}

const Tag: React.FC<IProps> = ({ name }) => {
  return (
    <div className="bg-yellow-500/20 dark:bg-pink-500/20 px-2 py-1 rounded-lg mb-3 mr-3 text-sm">
      <p>{name}</p>
    </div>
  );
};

export default Tag;
