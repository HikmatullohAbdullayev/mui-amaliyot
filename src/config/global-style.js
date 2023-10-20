import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

export const  GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
a{
    text-decoration:none;
    display: inline-block;

}
body{
    font-family: "Bebas Neue", sans-serif;
    background-color:${COLORS.lynxWhite};
}


`