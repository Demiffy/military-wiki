// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  header {
    background-color: #282c34;
    padding: 1rem;
    color: white;
  }

  nav {
    display: flex;
    justify-content: space-around;
  }

  nav a {
    color: white;
    font-weight: bold;
  }

  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
  }
`;

export default GlobalStyle;
