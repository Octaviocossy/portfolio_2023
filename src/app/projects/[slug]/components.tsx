import { IProject, ISkill } from "@/models";
import { Tag } from "@/screens/home/ui";
import { cn } from "@/utilities/tailwind_merge.utility";
import Image from "next/image";

export const Components = (props: IProject) => ({
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="text-3xl font-bold">
      {props.children}
    </h1>
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="text-xl font-bold">
      {props.children}
    </h2>
  ),
  Tags: () => (
    <div className="flex flex-wrap">
      {props.tags.map((tag) => (
        <Tag
          key={tag}
          className="border-[#f0d8ba] bg-[#f5e7d6] dark:bg-gray-500/10 border-2 dark:border-gray-500/10 mb-[0] text-[0.8rem] font-semibold"
        >
          {tag}
        </Tag>
      ))}
    </div>
  ),
  Skills: () => (
    <div className="flex flex-wrap">
      {props.skills.map((skill) => (
        <Tag
          key={skill.id}
          className={cn("mb-[0] shadow-lg border-2", skill.color)}
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
  ),
});
