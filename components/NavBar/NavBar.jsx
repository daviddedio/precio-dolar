import { NavLink } from "react-router-dom"
import { useState } from "react"
import './NavBar.css'

export const NavBar = () => {

    const [optionSelecte, setOptionSelected] = useState(["selected","","",""])

    const selection = (n)=>{
        const options = ["","","",""]
        options[n] = "selected"
        setOptionSelected(options)
    }

    return( 
        <>
        <ul className="nav-options">
            <li className={`li ${optionSelecte[0]}`} onClick={()=>selection(0)}><NavLink to={'/'}>Noticias</NavLink></li>
            <li className={`li ${optionSelecte[1]}`} onClick={()=>selection(1)}><NavLink to={'/acciones'}>Acciones y riesgos</NavLink></li>
            <li className={`li ${optionSelecte[2]}`} onClick={()=>selection(2)}><NavLink to={'/dolar'}>Precios Dolares</NavLink> </li>
            <li className={`li ${optionSelecte[3]}`} onClick={()=>selection(3)}><NavLink to={'/cripto'}>Precios Criptos</NavLink></li>
        </ul>
        </>
    )
}