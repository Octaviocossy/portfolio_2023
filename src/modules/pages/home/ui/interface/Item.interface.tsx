import { IExperience } from "@/models";

interface IProps {
  data: IExperience;
}

const Item: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      <p>
        <span>{data.from}</span>
        {" - "}
        <span>{data.to}</span>
        {" -> "}
        <a href={data.url} target="_blank" className={"font-bold underline"}>
          {data.company}
        </a>
      </p>
      <p className="ml-3 text-[0.9rem] font-semibold">{data.description}</p>
    </div>
  );
};

export default Item;
