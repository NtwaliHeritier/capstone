import React from 'react';
import { useSelector } from 'react-redux';
import '../css/show.css';

const Info = () => {
  const info = useSelector(store => store.info);
  return (
    <section>
      {console.log(info)}
      <div className="stock-details mt-4">
        <a className="navbar-brand mr-5 stock-title d-block text-center mb-3" href={info.website} target="_blank" rel="noreferrer">{info.companyName}</a>
        <div className="d-flex justify-content-between w-75 mx-auto mb-3">
          <span>
            MARKET CAP: $
            {info.mktCap}
          </span>
          <span>
            CEO:
            {info.ceo}
          </span>
          <span>
            Industry:
            {info.industry}
          </span>
        </div>
        <img src={info.image} alt="" />
        <p className="mt-4 stock-details-p px-5 w-75 mx-auto">{info.description}</p>
      </div>
    </section>

  );
};

export default Info;
