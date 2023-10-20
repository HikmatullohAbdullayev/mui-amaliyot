import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {COLORS} from "../../../config/colors"
import { HeaderButtonsData } from "../headerData";

export const HeaderButtons = () =>{


    return(

        <GridBox>
            <Grid  container>
            {HeaderButtonsData.map((item) => {
           const {Icon} = item

           return(
            <GridItem  key={item.title} item > 
            <Link to={item.link} >
                <Icon/>
            {item.title}
            </Link>
                </GridItem>
           )
    })}
        </Grid>
        </GridBox>
    )
}
const GridItem = styled(Grid)`
    padding: 8px;
    color: #000;
`


const GridBox = styled.div`
padding-left: 50px;
border-left: 1px solid ${COLORS.lunarRock};
max-width: 400px;
gap: 10px;
flex-wrap: nowrap;

`
