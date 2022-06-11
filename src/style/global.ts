import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}

    button{
        background:transparent;
        border:none;
        padding:0;
        cursor:pointer;
    }
    
    body{
        font-family: 'Saira', sans-serif;
        font-weight: 300;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;
