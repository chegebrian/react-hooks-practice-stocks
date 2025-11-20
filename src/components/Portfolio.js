import React from "react";
import { useStock } from "../contexts/Stocks";

function Portfolio({ port }) {
  const { handleRemovePortfolio } = useStock();
  return (
    <div>
      <div className="card" onClick={() => handleRemovePortfolio(port)}>
        <div className="card-body">
          <h5 className="card-title">{port.name}</h5>
          <p className="card-text">{port.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
