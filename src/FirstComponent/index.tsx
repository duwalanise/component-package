export type FirstComponentProps = {
  title?: string;
  body?: string;
};

export const FirstComponent = (props: FirstComponentProps) => {
  const {
    title = "Hello, World!",
    body = "I am the first component of this lib",
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
