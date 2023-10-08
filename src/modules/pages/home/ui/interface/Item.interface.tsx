import { ERoutes, IExperience } from "@/models";
import Link from "next/link";

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
        <Link
          href={`${ERoutes.EXPERIENCE}/${data.slug}`}
          className={"underline font-bold"}
        >
          {data.company}
        </Link>
      </p>
    </div>
  );
};

export default Item;
