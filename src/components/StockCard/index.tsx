import React from "react";

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
    <div>
      <h1>StockCard</h1>
    </div>
  );
};
