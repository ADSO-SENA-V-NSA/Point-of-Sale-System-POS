import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const OrderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #B5B7C3;
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
const Box = styled.div`
    width: 30px;
    height: 30px;
    outline: 1px solid #1d2027;
    background-color: #212227;
    border-radius: 5px;
    display: grid;
    place-items: center;
`
const DescriptionDiv = styled.div`
    display: flex;
    align-items: center;
`
const ControlDiv = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`

export default function Order(){
    return(
        <OrderDiv>
            <DescriptionDiv>
                <ImageDiv>
                    <ProductImage src="images/bread_pic.webp" alt="product" />     
                </ImageDiv>
                <h4>Placeholder Item</h4>
            </DescriptionDiv>
            <ControlDiv>
                <Box>
                <FaMinus/> 
                </Box>
                <h2>5</h2>
                <Box>
                <FaPlus/>
                </Box>
            </ControlDiv>
            

        </OrderDiv>
    )
}