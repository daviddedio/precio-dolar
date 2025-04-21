import { NavLink } from "react-router-dom"
import './NavBar.css'

export const NavBar = () => {

    

    return( 
        <>
        <ul className="nav-options">
            <li><NavLink to={'/'}>Noticias</NavLink></li>
            <li><NavLink to={'/acciones'}>Acciones y riesgos</NavLink></li>
            <li><NavLink to={'/dolar'}>Precios Dolares</NavLink> </li>
            <li><NavLink to={'/cripto'}>Precios Criptos</NavLink></li>
        </ul>
        </>
    )
}