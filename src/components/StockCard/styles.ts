import styled from "styled-components";

interface Props {
  positive: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background: var(--secondary-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 0.25rem;
  border-left: ${(props) =>
    props.positive
      ? "4px solid var(--positive-variation-color)"
      : "4px solid var(--negative-variation-color)"};
  width: 21.375rem;
  height: 13.8125rem;
  padding: 0.5rem;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  h2 {
    color: var(--text-color);
  }

  p {
    color: var(--text-color-light);
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const PriceContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* width: 100%; */

  .price {
    font-size: 3rem;
    color: var(--text-color);
    font-weight: 600;
  }

  .variation-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: 0.25rem;
  }

  .variation {
    background-color: ${(props) =>
      props.positive
        ? "var(--positive-variation-color)"
        : "var(--negative-variation-color)"};
    color: var(--secondary-color);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.825rem;
    font-weight: bold;
  }
`;
