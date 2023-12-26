import { LOCAL_MDX_PATH, get_all_metas, verify_slug } from "@/utilities";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import { Components } from "./components";
import { readFile } from "fs/promises";
import { Container } from "@/ui";
import matter from "gray-matter";
import { projectAdapter } from "@/adapters";

interface IProps {
  params: { slug: string };
}

export default async function Project({ params: { slug } }: IProps) {
  // Redirect to home page if slug is not valid
  if (!(await verify_slug(slug, "project"))) return redirect("/");

  const file = await readFile(`${LOCAL_MDX_PATH["project"]}/${slug}.mdx`, "utf-8");

  const { content } = matter(file);

  const data = (await projectAdapter(await get_all_metas("project"))).find(data => data.slug === slug);

  // if data is undefined, redirect to home page
  if(!data) return redirect("/");

  return (
    <Container className="space-y-4">
      <MDXRemote
        source={content}
        components={{ ...Components, ...(Components(data) || {}) }}
      />
    </Container>
  );
}
