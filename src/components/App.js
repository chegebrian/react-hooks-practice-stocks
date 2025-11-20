import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { StockProvider } from "../contexts/Stocks";

function App() {
  return (
    <StockProvider>
      <div>
        <Header />
        <MainContainer />
      </div>
    </StockProvider>
  );
}

export default App;
