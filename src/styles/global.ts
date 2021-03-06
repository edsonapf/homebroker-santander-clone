import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #eaeaea;
    --primary-color: #ea1d25;
    --secondary-color: #ffffff;
    --text-color: #5c6369;
    --text-color-light: rgba(92, 99, 105, 0.45);
    --positive-variation-color: #87d883;
    --negative-variation-color: #f55a5f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 731px) {
      font-size: 87.5%; // 14px
    }
  }

  html, body {
    height: 100vh;
    font-family: 'Segoe UI', sans-serif;
    background: var(--background-color);
  }

  button {
    cursor: pointer;
  }

  .main-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21.375rem, 1fr));
    gap: 2rem;
    padding: 1.5rem 2rem;
    
    @media screen and (max-width: 683px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
