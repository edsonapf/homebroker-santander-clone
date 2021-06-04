import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary-color);
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
