import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: hsl(166.6 100% 37.72%);
        color: black;
        max-width: 980px !important;
        margin: auto;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 18px;
    }

    @media screen and (max-width: 1000px) {
        body {
            padding: 0 15px;
        }
      }
`