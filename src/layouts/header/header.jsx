import { Container, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { HeaderSearch } from "./components/header-search";
import { HeaderButton } from "./components/header-button";
import { HeaderButtons } from "./components/heade-buttons";
import { COLORS } from "../../config/colors";
import { Navbar } from "./components/navbar";
 export const Header = () => {

    return(
       <>
        <HeaderStyle>
    <Container>
    <Stack direction="row">
        <HeaderSearch/>
        <HeaderButton/>
        <HeaderButtons/>
    </Stack>
    </Container>
       </HeaderStyle>
       
    <Navbar/>
       </>
    )
}






const HeaderStyle = styled.header`
padding: 16px 0;
margin: 0 auto;
`

const NavbarStyle = styled.nav`

border-top: 1px solid ${COLORS.lunarRock};
`