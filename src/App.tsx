import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { StockCard } from "./components/StockCard";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div className="main-container">
        <StockCard
          tickerName="ITSA4"
          tickerPrice={0}
          date={new Date()}
          variation={0}
        />
        <StockCard
          tickerName="ITSA4"
          tickerPrice={0}
          date={new Date()}
          variation={0}
        />
        <StockCard
          tickerName="ITSA4"
          tickerPrice={12}
          date={new Date()}
          variation={0}
        />
        <StockCard
          tickerName="ITSA4"
          tickerPrice={32.15}
          date={new Date()}
          variation={-10}
        />
      </div>
    </div>
  );
}

export default App;
