import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPointOfSale } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdFileOpen } from "react-icons/md";
import TransactionCard from "./transactionCard";

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
    right: 30px;
    gap: 20px;
    color: #626573;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: 200ms ease-in-out;
    &:hover{
        color: #006AE6;
    }
`
const ListItem = styled.li`
    margin-bottom: 30px;
`
const Navbar = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 0 #1d2027;
`
const NavLogo = styled.img`
    width: 150px;
    
`
const NavLogoDiv = styled.div`
    
    width: 150px;
    padding: 0 70px;
    box-shadow: 2px 0 0 #1d2027;
`
const LeftBar = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const RightBar = styled.div`
    
`

export default function Header (){
    return(
        <NavDiv>
            <Sidebar>
                <CatLogo src="images/cat_logo.svg" alt="Logo" />
                <List>
                    <ListItem><ListLink to={"/"}><MdSpaceDashboard/> Dashboard</ListLink></ListItem>
                    <ListItem><ListLink to={"/caja"}><MdPointOfSale/> Caja</ListLink></ListItem>
                    <ListItem><ListLink to={"/productos"}><MdShoppingCart/> Productos</ListLink></ListItem>
                    <ListItem><ListLink to={"/facturas"}><MdFileOpen /> Facturas</ListLink></ListItem>
                </List>
            </Sidebar>
            <Navbar>
                <LeftBar>
                    <NavLogoDiv>
                        <NavLogo src="images/panaderia_logo.svg" alt="Panaderia" />
                    </NavLogoDiv>
                   <TransactionCard color={"#00A261"} text={"Ingresos"} value={"$57.000"}/>
                   <TransactionCard color={"#E42855"} text={"Egresos"} value={"$21.000"}/>
                   <TransactionCard color={"#006AE6"} text={"Total"} value={"$36.000"}/>    
                </LeftBar>
                <RightBar>

                </RightBar>
                
            </Navbar>
        </NavDiv>
    );
};
