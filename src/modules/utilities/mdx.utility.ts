import fs from "fs/promises";
import matter from "gray-matter";

type TMDX_TYPE = "project" | "post";

export const LOCAL_MDX_PATH: { [key: string]: string } = {
  project: "src/modules/pages/home/projects",
  post: "src/modules/pages/blog/posts",
};

export const verify_slug = async (
  slug: string,
  mdx_type: TMDX_TYPE,
): Promise<Boolean> => {
  return await fs
    .readdir(LOCAL_MDX_PATH[mdx_type])
    .then((data) => data.includes(`${slug}.mdx`));
};

export const get_all_metas = async <T>(mdx_type: TMDX_TYPE): Promise<T[]> => {
  const path = LOCAL_MDX_PATH[mdx_type];

  // get name of each mdx file
  const files = await fs.readdir(path as string);

  // get meta of each
  const metas: T[] = await Promise.all(
    files.map(async (file) => {
      const mdxSource = await fs.readFile(`${path}/${file}`, "utf-8");

      const { data } = matter(mdxSource);

      return data as T;
    })
  );

  return metas;
};
