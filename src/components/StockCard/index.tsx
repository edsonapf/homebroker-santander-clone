import React from "react";
import { Container, Header, PriceContainer } from "./styles";

interface Props {
  tickerName: string;
  tickerPrice: number;
  variation: number;
  date: Date;
}

export const StockCard: React.FC<Props> = ({
  tickerName,
  tickerPrice,
  variation,
  date,
}) => {
  return (
    <Container positive={variation >= 0}>
      <Header>
        <h2>{tickerName}</h2>
        <p>
          {new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "medium",
          }).format(date)}
        </p>
      </Header>
      <PriceContainer positive={variation >= 0}>
        <span className="price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(tickerPrice)}
        </span>
        <div className="variation-container">
          <span className="variation">{variation.toFixed(2)} %</span>
        </div>
      </PriceContainer>
    </Container>
  );
};
