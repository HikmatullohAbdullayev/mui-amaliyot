import { Stack } from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.svg"
import { Link } from "@mui/material";
import { PATHS } from "../../../config/site-path";
import styled from "styled-components";
import { COLORS } from "../../../config/colors";

export const HeaderSearch = () =>{

    return(
        <Stack padding="25px 0" alignItems="center"  maxWidth="1153px" gap="53px" width="100%" direction="row">
        <Link to={PATHS.home}>
            <img src={logo}/>
        </Link>
        <InputBlock>
            <SearchInput name="search" placeholder="search"/>
        </InputBlock>
        
        </Stack>
    )
}

const InputBlock = styled.div`
flex-grow: 1;
`

const SearchInput = styled.input`

font-size: 14px;
font-weight: 400;
width: 100%;
border:  1px solid ${COLORS.lunarRock};
outline: none;
padding: 8px 16px;
display: block;
::placeholder{
    padding: 8px 0 ;
    color: ${COLORS.lunarRock};
}

`