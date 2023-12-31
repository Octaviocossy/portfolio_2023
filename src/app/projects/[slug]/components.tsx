import { IProject } from "@/models";
import { LinkIcon } from "@/ui";
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
  Info: () => (
    <div className="flex flex-col space-y-2">
      <div className="text-sm flex items-center space-x-2">
        <p className="font-semibold p-1 text-yellow-800 dark:text-yellow-200 bg-yellow-400/20 rounded-md">
          PLATAFORMA
        </p>
        <div className="flex flex-row space-x-1">
          {props.platforms.map((platform, i) => (
            <p key={platform}>
              {platform}
              {i !== props.platforms.length - 1 && ","}
            </p>
          ))}
        </div>
      </div>
      <div className="text-sm flex items-center space-x-2">
        <p className="font-semibold p-1 text-yellow-800 dark:text-yellow-200 bg-yellow-400/20 rounded-md">
          WEBSITE
        </p>
        <Link
          href={props.deploy || ""}
          className="hover:underline flex items-center"
        >
          <span>
            {props.deploy} <LinkIcon className="ml-1 inline" />
          </span>
        </Link>
      </div>
      <div className="text-sm flex items-center space-x-2">
        <p className="font-semibold p-1 text-yellow-800 dark:text-yellow-200 bg-yellow-400/20 rounded-md">
          STACK
        </p>
        <div className="flex flex-row space-x-1">
          {props.skills.map((skill, i) => (
            <p key={skill.id}>
              {skill.name}
              {i !== props.skills.length - 1 && ","}
            </p>
          ))}
        </div>
      </div>
      <div className="text-sm flex items-center space-x-2">
        <p className="font-semibold p-1 text-yellow-800 dark:text-yellow-200 bg-yellow-400/20 rounded-md">
          TIPO
        </p>
        <div className="flex flex-row space-x-1">
          {props.tags.map((tag, i) => (
            <p key={tag}>
              {tag}
              {i !== props.tags.length - 1 && ","}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
});
