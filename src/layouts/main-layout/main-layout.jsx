import React from "react";
import styled from "styled-components";
import { Header } from "../header/header";
import {Footer} from "../footer/footer"
import { Outlet } from "react-router-dom";
export const MainLayout = () => {

    return(
        <Wrapper>
       <div className="wrapper"> 
       <Header>
            
       </Header>
        <main>
            <Outlet/>
        </main>
        </div>


        <Footer>

        </Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;

`