import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    background-color: #15171C;
    width: 270px;
    height: 320px;
    border-radius: 15px;
    outline: 1px solid #1d2027;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #B5B7C3;
`
const ProductDiv = styled.div`
    width: 190px;
    height: 190px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
`
const ProductPic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h3`
    margin-bottom: -15px;
`
const Description = styled.p`
    margin-bottom: -15px;
    font-size: 14px;
    color: #626573;
`
const Price = styled.h2`
    color: #00A261;
    margin-bottom: -10px;
`

export default function ProductCard(){
    return(
        <CardDiv>
            <ProductDiv>
                <ProductPic src="images/bread_pic.webp" alt="picture" />   
            </ProductDiv>
            <Title>Placeholder Item</Title>
            <Description>Item Description</Description>
            <Price>$5.000</Price>
        </CardDiv>
    )
}