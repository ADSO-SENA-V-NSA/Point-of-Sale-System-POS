import React from "react";
import styled from "styled-components";
import { MdPointOfSale } from "react-icons/md";

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`

const InfoDiv = styled.div`
    
    color: white;
    margin-left: 10px;
`
const ParrafOne = styled.h3`
    margin-bottom: -2px;
`
const ParrafTwo = styled.p`
    margin-top: -2px;
`
const Icon = styled(MdPointOfSale)`
    color: white;
    width: 30px;
    height: 30px;
`


export default function TransactionCard({color, text, value}){

    const SaleIcon = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${color};
        border-radius: 10px;
        
    `

    return(
        <InfoContainer>
            <SaleIcon>
                <Icon/>
            </SaleIcon>
            <InfoDiv>
                <ParrafOne>{text}</ParrafOne>
                <ParrafTwo>{value}</ParrafTwo>
                
            </InfoDiv>
            
         </InfoContainer>
    );
};