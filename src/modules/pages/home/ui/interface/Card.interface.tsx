"use client";

import { IProject } from "@/models";
import Link from "next/link";
import { Tag } from ".";

interface IProps {
  data: IProject;
}

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <Link
      className="border-[#f3e0c8] hover:bg-[#f5e6d3] hover:border-[#f0d8ba] border-2 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-700 p-3 rounded-lg cursor-pointer transition-colors space-y-2"
      href={`/projects/${data.slug}`}
    >
      <h1 className="text-lg font-semibold">{data.title}</h1>
      <div className="flex flex-wrap">
        {data.tags.map((tag) => (
          <Tag
            key={tag}
            text={tag}
            className="border-[#f0d8ba] bg-[#f5e7d6] dark:bg-gray-500/10 border-2 dark:border-gray-500/10 mb-[0] text-[0.8rem] font-semibold"
          />
        ))}
      </div>
      <p className="dark:text-gray-400 text-sm">{data.description}</p>
    </Link>
  );
};

export default Card;
