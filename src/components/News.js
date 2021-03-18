import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/news.css';

const News = () => {
  const [news, setNews] = useState([]);
  const loadNews = async () => {
    const myNews = await axios.get('https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=18e14f4a06420f6541dc232dea254989');
    setNews(myNews.data);
  }

  useEffect(() => {
    loadNews();
  }, []);

  return ( 
      <div className="news-container">
        {news.map(myNew => <div className="news" key={myNew.title}>
              <img src={myNew.image} alt="" />
              <div className="news-specs px-4">
                <h5 className="text-center my-2">{myNew.title}</h5>
                <span className="p-2 my-2 d-block">Published on: &nbsp;{myNew.publishedDate}</span>
                <p>{myNew.text}</p>
                <a className="details btn" href={myNew.url} target="_blank">READ MORE</a>
              </div>
            </div>
        )}
      </div>

   );
}
 
export default News;