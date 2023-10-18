import { Stack } from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.svg"
import { Link } from "@mui/material";
import { PATHS } from "../../../config/site-path";
import styled from "styled-components";

export const HeaderSearch = () =>{

    return(
        <Stack>
        <Link to={PATHS.home}>
            <img src={logo}/>
        </Link>
        <div>
            <SearchInput/>
        </div>
        </Stack>
    )
}

const SearchInput = styled.input`

`