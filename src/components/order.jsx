import React from "react";
import styled from "styled-components";

const OrderDiv = styled.div`
    display: flex;
    align-items: center;
`
const ImageDiv = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 10px;
`
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export default function Order(){
    return(
        <OrderDiv>
            <ImageDiv>
                <ProductImage src="images/bread_pic.webp" alt="product" />     
            </ImageDiv>
            <h4>Placeholder Item</h4>
        </OrderDiv>
    )
}