import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header (){
    return(
        <div>
            <aside>
                <img src="" alt="Logo" />
                <ul>
                    <li><Link to={"/"}>Dashboard</Link></li>
                    <li><Link to={"/caja"}>Caja</Link></li>
                    <li><Link to={"/productos"}>Productos</Link></li>
                    <li><Link to={"/facturas"}>Facturas</Link></li>
                </ul>
            </aside>
            <header>
                <div>
                    <h1>Hola Dashboard</h1>
                </div>
            </header>
        </div>
    );
};
