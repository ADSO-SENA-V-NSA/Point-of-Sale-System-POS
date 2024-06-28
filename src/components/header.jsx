import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
`
const Sidebar = styled.aside`
    background-color: #15171C;
    width: 250px;
    height: 80vh;
    margin-left: 30px;
    margin-top: 30px;
    border-radius: 15px;
    outline: 1px solid #1d2027;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CatLogo = styled.img`
    margin-top: 20px;
    width: 80px;
    text-align: center;
`
const List = styled.ul`
    list-style: none;
    margin-top: 50px;

`
const ListLink = styled(Link)`
    text-decoration: none;
    position: relative;
    right: 60px;
    gap: 20px;
    color: #626573;
    font-weight: bold;
    font-size: 1.5rem;
    transition: 200ms ease-in-out;
    &:hover{
        color: #006AE6;
    }
`
const ListItem = styled.li`
    margin-bottom: 20px;
`
const Navbar = styled.header`
    width: 100%;
    height: 80px;
    box-shadow: 0 2px 0 #1d2027;
`

export default function Header (){
    return(
        <NavDiv>
            <Sidebar>
                <CatLogo src="images/cat_logo.svg" alt="Logo" />
                <List>
                    <ListItem><ListLink to={"/"}>Dashboard</ListLink></ListItem>
                    <ListItem><ListLink to={"/caja"}>Caja</ListLink></ListItem>
                    <ListItem><ListLink to={"/productos"}>Productos</ListLink></ListItem>
                    <ListItem><ListLink to={"/facturas"}>Facturas</ListLink></ListItem>
                </List>
            </Sidebar>
            <Navbar>
                <div>
                    <h1>Hola Dashboard</h1>
                </div>
            </Navbar>
        </NavDiv>
    );
};
