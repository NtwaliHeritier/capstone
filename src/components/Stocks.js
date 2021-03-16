import React from 'react';

const Stocks = ({stocks}) => {
  <section className="companies mt-3">
    <div className="company">
      <h3 className="text-white">Google</h3>
      <span className="symbol">GOOGL</span>
      <div className="finances mt-3 mb-4">
        <span className="price">13.52</span>
        <span>New York Stock Exchange</span>
      </div>
      <a href="./show.html" className="details btn">Details</a>
    </div>
  </section>
};

export default Stocks;
