import React from 'react';
import { useSelector } from 'react-redux';
import '../css/show.css';

const Info = () => {
  const info = useSelector(store => store.info);
  return (
    <section>
      {console.log(info)}
      <div className="stock-details mt-4">
        <a className="navbar-brand mr-5 stock-title d-block text-center mb-5" href="body">{info.companyName}</a>
        <img src={info.image} alt="" />
        <p className="mt-5 stock-details-p p-4">{info.description}</p>
      </div>
    </section>

  );
};

export default Info;
