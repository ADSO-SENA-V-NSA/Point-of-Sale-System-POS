import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/categoriCard";
import ProductCard from "../components/productCard";
import Order from "../components/order";

const MainDiv = styled.div`
    position: absolute;
    top: 112px;
    left: 320px;
    width: 82%;
    display: flex;
`
const ContentDiv = styled.div`
    
`
const CategoryDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const ProductDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`
const OrderDiv = styled.div`
    width: 800px;
    height: 700px;
    background-color: #15171C;
    position: sticky;
    outline: 1px solid #1d2027;
    border-radius: 15px;
    padding: 20px;

`

export default function Main(){
    return(
        <MainDiv>
            <ContentDiv>
                <CategoryDiv>  
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </CategoryDiv>
                <ProductDiv>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </ProductDiv>
            </ContentDiv>
            <OrderDiv>
                <h1>Orden actual</h1>
                <Order/>
            </OrderDiv>
        </MainDiv>
        
        
    );
};