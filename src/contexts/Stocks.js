import React, { createContext, useContext, useEffect, useState } from "react";

const stocksContext = createContext();
const URL = "http://localhost:3001/stocks";

function StockProvider({ children }) {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  function handleSelectedButton(e) {
    setSelectedButton(e.target.value);
  }
  function handleAddPortfolio(stock) {
    setPortfolio((portfolio) =>
      portfolio?.find((port) => port.id === stock.id)
        ? portfolio
        : [...portfolio, stock]
    );
  }

  function handleRemovePortfolio(port) {
    setPortfolio((portfolio) => portfolio?.filter((p) => p.id !== port.id));
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setStocks(data);
    }
    fetchData();
  }, []);

  const [selectedOption, setSelectedOption] = useState("");
  function handleSelectedOption(e) {
    setSelectedOption(e.target.value);
  }

  const filteredStocks = stocks?.filter((stock) =>
    stock.type.toLowerCase().includes(selectedOption?.toLowerCase())
  );

  function handleSorting(filteredStocks) {
    if (!selectedButton) return filteredStocks;
    if (selectedButton === "Price")
      return filteredStocks.toSorted((a, b) => a.price - b.price);
    if (selectedButton === "Alphabetically")
      return filteredStocks.toSorted((a, b) =>
        a.ticker.localeCompare(b.ticker)
      );
  }

  const sortedStock = handleSorting(filteredStocks);
  return (
    <stocksContext.Provider
      value={{
        stocks,
        handleAddPortfolio,
        portfolio,
        handleRemovePortfolio,
        handleSelectedOption,
        selectedOption,
        filteredStocks,
        selectedButton,
        handleSelectedButton,
        sortedStock,
      }}
    >
      {children}
    </stocksContext.Provider>
  );
}

function useStock() {
  const context = useContext(stocksContext);
  if (context === undefined)
    throw new Error("stocksContext was used outside of its provider");

  return context;
}

export { useStock, StockProvider };
