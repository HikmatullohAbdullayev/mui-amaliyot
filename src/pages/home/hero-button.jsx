import React from "react";
import styled from "styled-components";
import {COLORS} from "../../config/colors"

export const HeroButton = () =>{
    return(
        <HeroBtn>
            В КАТАЛОГ
        </HeroBtn>

    )
}

const HeroBtn = styled.a`
background-color: ${COLORS.primary};
margin-bottom: 190px;
margin-top: 27px;
max-width: 180px;
padding: 17px 26px ;
cursor: pointer;
    color: #FFF;
text-align: center;
font-size: 14px;
font-weight: 400;
letter-spacing: 1.4px;

`