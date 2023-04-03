export const SingleElement = ({ data, modalHandler, lastElementRef }: any) => {
  return (
    <li
      className="border-bottom pt-2 pb-2 hover-primary cursor-pointer"
      onClick={() => modalHandler(data)}
      ref={lastElementRef}
    >
      <h2 className="fs-5">{data.title}</h2>
      <p className="my-2">{data.source.name}</p>
      <p>{data.publishedAt.split('T')[0]}</p>
    </li>
  );
};