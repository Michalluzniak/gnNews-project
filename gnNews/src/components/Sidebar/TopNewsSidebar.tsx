import { useEffect, useState } from 'react';
import { getGlobalNews } from '../../api/getGlobalNews';

const CoutriesSidebar = () => {
  const [globalNews, setGlobalNews] = useState<any>();

  useEffect(() => {
    const getGlobalNewsHandler = async () => {
      const response = await getGlobalNews();
      setGlobalNews(response);
    };
    getGlobalNewsHandler();
  }, []);

  return (
    <div className="sidebar d-flex flex-column align-items-center bg-dark w-20 ms-3 rounded">
      <div className="d-flex  justify-content-center align-item-center py-3 pb-2">
        <p className="fs-5 m-0 ">Today Global News</p>
      </div>
      <ul className="list-unstyled overflow-auto h-100 w-100 px-3">
        {globalNews &&
          globalNews.articles.map((article: any, index: number) => {
            return (
              <li className={` ${index !== 0 && 'my-2'} py-3 d-flex bg-light w-100 px-5   hover-dark`}>
                <div className="w-100 text-start">{article.title}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CoutriesSidebar;
