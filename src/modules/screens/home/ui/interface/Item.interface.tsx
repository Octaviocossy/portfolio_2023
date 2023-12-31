import { IExperience } from "@/models";

interface IProps {
  data: IExperience;
}

const Item: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      <p className="font-bold">
        <span>{data.from}</span>
        {" - "}
        <span>{data.to}</span>
        {" -> "}
        <a href={data.url} target="_blank" className={"font-semibold underline"}>
          {data.company}
        </a>
      </p>
      <p className="ml-3 text-[0.9rem] font-semibold">{data.description}.</p>
      <ul className="ml-9 list-disc">
        {data.projects.map((project) => (
            <li key={project.title} className="text-[0.9rem]">
              <p className="font-semibold">{project.title}</p>
              <div className="ml-3">
                {project.technologies.map((technology, i) => (
                  <span key={technology}>
                    {technology}{" "}
                    {i !== project.technologies.length - 1 && " - "}
                  </span>
                ))}
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
