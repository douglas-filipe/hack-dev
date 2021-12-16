import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        width: 100vw;
        height: 100vh;
        background: #131A21;
        color: #D3D6DD;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            width: 10px; /* width of the entire scrollbar */
        }

        ::-webkit-scrollbar-track {
            background-color: #0e1222; /* color of the scroll thumb */
        }

        ::-webkit-scrollbar-thumb {
            background: #1c2230; /* color of the tracking area */
            border-radius: 20px; /* roundness of the scroll thumb */
        }
    }

    

        /**Scroll */
    
    /** */
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }


`;

export default GlobalStyle;
