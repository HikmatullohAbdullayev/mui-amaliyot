import React from "react";
import styled from "styled-components";
import { Container, Stack } from "@mui/material";
import { COLORS } from "../../../config/colors";
export const Navbar = () =>{

    return(
        <>
           <Line>
           <Stack justifyContent={"space-between"}> 
           <Container>

           <NavList>
                <li>Сигареты</li>
                <li>Одноразки</li>
                <li>Iqos, glo</li>
                <li>Pod-системы</li>
                <li>Жидкости</li>
                <li>Катриджи</li>
                <li>Кальянный табак</li>
                <li>Все для кальяна</li>
                <li>Аксессуары</li>
            </NavList>
           </Container>

            </Stack>
           </Line>

        </>
    )
}
const Line = styled.div`
border-top: 1px solid ${COLORS.lunarRock};

`

const NavList = styled.ul`
padding: 12px 10px;
display: flex ;
justify-content: space-between;
align-items: center;
gap: 20px;
list-style: none;
li{
    color: #000;
font-size: 14px;
font-weight: 400;
letter-spacing: 0.7px;
}
`

const NavMenu = styled.p`

`