import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

type TMDX_TYPE = "project" | "post";

export const LOCAL_MDX_PATH: { [key: string]: string } = {
  project: `${process.cwd()}/src/modules/screens/home/projects`,
  post: `${process.cwd()}/src/modules/screens/blog/posts`,
};

export const verify_slug = async (slug: string, mdx_type: TMDX_TYPE): Promise<Boolean> => {
  return await fs.readdir(LOCAL_MDX_PATH[mdx_type]).then((data) => data.includes(`${slug}.mdx`));
};

export const get_all_metas = async <T>(mdx_type: TMDX_TYPE): Promise<T[]> => {
  const _path = LOCAL_MDX_PATH[mdx_type];

  // get name of each mdx file
  const files = await fs.readdir(_path as string);

  // get meta of each
  const metas: T[] = await Promise.all(
    files.map(async (file) => {
      const mdxSource = await fs.readFile(path.resolve(_path, file), "utf-8");

      const { data } = matter(mdxSource);

      return data as T;
    })
  );

  return metas;
};
