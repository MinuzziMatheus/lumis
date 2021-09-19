import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
      --background: #121414;
      --yellow: #EBA417;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button, select {
        font: 700 1rem 'Roboto', sans-serif;
    }


    button {
        cursor: pointer;
        border: none;
    }

    a, ul, li {
        color: inherit;
        text-decoration: none;
    }
`