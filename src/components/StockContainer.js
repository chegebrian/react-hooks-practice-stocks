import React from "react";
import Stock from "./Stock";
import { useStock } from "../contexts/Stocks";

function StockContainer() {
  const { stocks, filteredStocks, sortedStock } = useStock();
  console.log(stocks);

  return (
    <div>
      <h2>Stocks</h2>
      {sortedStock?.map((stock) => (
        <Stock key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default StockContainer;
