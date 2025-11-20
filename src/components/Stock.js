import React from "react";
import { useStock } from "../contexts/Stocks";

function Stock({ stock }) {
  const { handleAddPortfolio } = useStock();
  return (
    <div>
      <div className="card" onClick={() => handleAddPortfolio(stock)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
