import React from "react";
import styled from "styled-components";
import { MdPointOfSale } from "react-icons/md";

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`
const InfoDiv = styled.div`
    
    color: white;
    margin-left: 10px;
`
const ParrafOne = styled.h4`
    margin-bottom: -1px;
`
const ParrafTwo = styled.p`
    margin-top: -1px;
    font-size: 14px;
    color: #626573;
    
`
const Icon = styled(MdPointOfSale)`
    color: white;
    width: 22px;
    height: 22px;
`


export default function TransactionCard({color, text, value}){

    const SaleIcon = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
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