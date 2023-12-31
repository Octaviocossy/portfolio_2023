"use client";

import { IProject } from "@/models";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  data: IProject;
}

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <Link href={`/projects/${data.slug}`} className="space-y-2">
      <Image alt={`${data.title}-miniature`} width={720} height={400} src={data.miniature} className="rounded-lg" />
      <h1 className="text-lg font-semibold">{data.title}</h1>
      <p className="dark:text-gray-400 text-sm">{data.description}</p>
    </Link>
  );
};

export default Card;
