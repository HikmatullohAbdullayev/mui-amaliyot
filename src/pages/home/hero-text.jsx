import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const HeroContent = () =>{

    return( 
        <Stack>
            <HeroTitle>НАСТОЯЩИЙ ВКУС ТАБАКА
                БЕЗ ВРЕДА ДЛЯ ОКРУЖАЮЩИХ</HeroTitle>
            <HeroText>Новая линейка табачных стиков для нагревательных систем IQOS</HeroText>
        
        </Stack>
    )
}

const HeroTitle = styled.h1`
margin-top: 184px;
color: #FFF;
font-size: 48px;
font-weight: 400;
letter-spacing: 2.4px;
max-width: 662px;
padding-bottom: 20px;
`

const HeroText = styled.p`
color: #FFF;
font-size: 18px;
font-weight: 400;
letter-spacing: 0.9px;
`