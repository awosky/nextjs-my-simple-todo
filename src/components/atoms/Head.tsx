import HeadNext from "next/head";

interface Props {
  title?: string;
  description?: string;
}

const Head = (props: Props) => {
  const { title, description } = props;

  const defaultMeta = {
    title: "My Simple Todo",
    description: "My Simple Todo is a simple to do web application",
  };

  return (
    <HeadNext>
      <title>{title || defaultMeta.title}</title>
      <meta
        name="description"
        content={description || defaultMeta.description}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </HeadNext>
  );
};

export default Head;
