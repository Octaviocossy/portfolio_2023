import { LOCAL_MDX_PATH, verify_slug } from "@/utilities";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import { readFile } from "fs/promises";
import { Container } from "@/ui";
import matter from "gray-matter";

interface IProps {
  params: { slug: string };
}

export default async function Post({ params: { slug } }: IProps) {
  // Redirect to home page if slug is not valid
  if (!(await verify_slug(slug, "post"))) return redirect("/");

  const file = await readFile(`${LOCAL_MDX_PATH["post"]}/${slug}.mdx`, "utf-8");

  const { content } = matter(file);

  return (
    <Container className="space-y-4">
      <MDXRemote source={content} />
    </Container>
  );
}
