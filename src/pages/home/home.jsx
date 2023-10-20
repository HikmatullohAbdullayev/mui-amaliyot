import React from "react";
import styled from "styled-components";
import HeroBanner from "../.././assets/heroBg.png"
import  {COLORS} from "../.././config/colors"
import { HeroContent } from "./hero-text";
import { Container } from "@mui/material";
import { HeroButton } from "./hero-button";
export const Home = () => {

    return(
        <>
        <HeroContainer>
        <Container>
            <HeroContent/>
            <HeroButton/>
        </Container>
        </HeroContainer>
            
        </>
    )
}

const HeroContainer = styled.section`
background-image: url(${HeroBanner});
background-position: center;
background-repeat: no-repeat;
background-size: cover;



`