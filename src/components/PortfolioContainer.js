import React from "react";
import Stock from "./Stock";
import { useStock } from "../contexts/Stocks";
import Portfolio from "./Portfolio";

function PortfolioContainer() {
  const { portfolio } = useStock();
  console.log(portfolio);

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio?.map((port, index) => (
        <Portfolio port={port} key={index} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
