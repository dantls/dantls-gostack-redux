import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    

    * {
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    #root {
        max-width:1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    body {
        background: #191920 url(${background}) no-repeat center top;
        font-family: Arial,Helvetica,sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
    body,input,button{
        font: 14px sans-serif;
    }

    button{
        cursor: pointer;
    }

`;
