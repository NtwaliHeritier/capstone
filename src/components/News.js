import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/news.css';
import ApiCall from '../modules/apicall';

const News = () => {
  const [news, setNews] = useState([]);
  const loadNews = async () => {
    const myNews = await ApiCall.callNews();
    setNews(myNews.data);
  }

  useEffect(() => {
    loadNews();
  }, []);

  return ( 
      <div className="news-container">
        {news.map(myNew => <div className="news" key={myNew.title}>
                <h5 className="text-center my-2">{myNew.title}</h5>
                <span className="p-2 my-2 d-block text-center">Published on: &nbsp;{myNew.publishedDate}</span>
                <div className="news-specs px-4 d-flex">
                <img src={myNew.image} alt="" />
                <p>{myNew.text}</p>
                </div>
                <a className="details btn" href={myNew.url} target="_blank">READ MORE</a>
              </div>
        )}
      </div>

   );
}
 
export default News;