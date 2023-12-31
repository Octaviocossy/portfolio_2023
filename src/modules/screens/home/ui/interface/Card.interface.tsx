"use client";

import { IProject } from "@/models";
import Link from "next/link";
import { Tag } from ".";
import Image from "next/image";
import { cn } from "@/utilities/tailwind_merge.utility";

interface IProps {
  data: IProject;
}

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <Link
      className="border-yellow-100/50 bg-yellow-100/10 hover:border-yellow-100/40 hover:bg-yellow-100/30 border-2 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-700 p-3 rounded-lg cursor-pointer transition-colors space-y-2"
      href={`/projects/${data.slug}`}
    >
      <h1 className="text-lg font-semibold">{data.title}</h1>
      <div className="flex flex-wrap">
        {data.skills.map((skill) => (
          <Tag
            key={skill.id}
            className={cn('mb-[0] shadow-lg border-2', skill.color)}
          >
            <Image
              width={15}
              height={15}
              src={skill.icon}
              alt={`${skill.name} icon`}
            />
          </Tag>
        ))}
      </div>
      <div className="flex flex-wrap">
        {data.tags.map((tag) => (
          <Tag
            key={tag}
            className="border-[#f0d8ba] bg-[#f5e7d6] dark:bg-gray-500/10 border-2 dark:border-gray-500/10 mb-[0] text-[0.8rem] font-semibold"
          >
            {tag}
          </Tag>
        ))}
      </div>
      <p className="dark:text-gray-400 text-sm">{data.description}</p>
    </Link>
  );
};

export default Card;
