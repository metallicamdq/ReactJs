import React from "react";
import "./navbar.css";
import CartWidget from "./Cart/CartWidget";

const Navbar =()=>{
    return(
        <nav className="nav">
            <img className="logo" src="https://www.bestshoes.cl/arquivos/logo_bestshoes.png?v=637566209027400000" alt=""></img>
            <ul className="nav-menu">
                <li className="nav-menu_li"><a href="#">Inicio</a></li>
                <li className="nav-menu_li"><a href="#">Productos</a></li>
                <li className="nav-menu_li"><a href="#">Categorias</a></li>
                <li className="nav-menu_li"><a href="#">Servicios</a></li>
            </ul>
            <CartWidget />
            <button  className="btn-interaz"><i class="fa-solid fa-user"></i></button>
        </nav>
    );
}

export default Navbar;