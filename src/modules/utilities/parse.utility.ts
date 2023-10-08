export const parseSlug = (text: string): string => {
  return text.toLowerCase().replaceAll(" ", "_");
};
