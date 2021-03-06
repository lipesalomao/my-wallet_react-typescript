import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color 0.3s ease-in-out;
        
    }
    html, body, #root {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        overflow-x: hidden;
        
    }
    button {
        cursor: pointer;

    } 
    
    *, button, input {
        border: 0;
        outline: 0;        
        font-family: "Roboto", Helvetica, Arial, sans-serif;
        
        
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
