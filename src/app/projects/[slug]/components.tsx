export const Components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="text-3xl font-bold">
      {props.children}
    </h1>
  ),
};
