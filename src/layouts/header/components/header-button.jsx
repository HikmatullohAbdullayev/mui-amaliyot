import React from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
export const HeaderButton = () =>{

    return(
        <>
        <Stack width="189px">
        <TelLink href="tel:98684576576">+7 (4932) 11-22-33</TelLink>
        <TelName>
            upalaqiton
        </TelName>
        </Stack>

        </>
    )
}

const TelName = styled.p`
color: #C5C5C5;
font-size: 12px;
font-weight: 700;
text-align: right;
`

const TelLink = styled.a`
color: #000;
text-align: right;
font-size: 16px;
font-weight: 700;
`
