import { IProject } from "@/models";
import { Vercel } from "@/ui";
import { Tag } from "@/screens/home/ui";
import { cn } from "@/utilities/tailwind_merge.utility";
import Image from "next/image";
import Link from "next/link";

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
          className={cn(
            "mb-[0] shadow-lg border-2 flex items-center",
            skill.color
          )}
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
  Deploy: () => (
    <div>
      <Link
        href={props.deploy || ""}
        target="_blank"
        className="border-[#f0d8ba] bg-yellow-200/10 hover:bg-yellow-100/50 transition-colors hover:dark:bg-gray-500/20 dark:bg-gray-500/10 border-2 dark:border-gray-500/10 mb-[0] text-[0.8rem] font-semibold flex items-center w-fit p-2 rounded-lg dark:shadow-slate-500/20 shadow-yellow-200/20 shadow-md"
      >
        <Vercel className="mr-2" /> Deploy
      </Link>
    </div>
  ),
});
