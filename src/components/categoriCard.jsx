import React from "react";
import styled from "styled-components";
import { RiBreadFill } from "react-icons/ri";

const CardDiv= styled.div`
    width: 135px;
    height: 180px;
    border-radius: 15px;
    outline: 3px solid #363843;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #626573;
    transition: 200ms ease-in-out;
    &:hover{
        outline: 2px solid #006AE6;
    }
`
const Icon =styled(RiBreadFill)`
    color: #626573;
    width: 55px;
    height: 55px;
    padding-bottom: 30px;
`
const Title = styled.h3`
    margin-top: 0;
    color: #B5B7C3;
`
const Description = styled.p`
    margin-top: -20px;
    font-size: 12px;
    
`

export default function CategoryCard(){
    return(
        <CardDiv>
            <Icon/>
            <Title>Panaderia</Title>
            <Description>16 Productos</Description>
        </CardDiv>
    )
}