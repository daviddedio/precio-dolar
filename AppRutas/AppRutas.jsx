import { RutaCripto } from "../rutas/RutaCripto"
import { RutaPrecioDolar } from "../rutas/RutaPrecioDolar"
import { RutaRiesgoPais } from "../rutas/RutaRiesgoPais"
import {RutaNews} from "../rutas/RutaNews"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { NavBar } from "../components/NavBar/NavBar"

export const AppRutas = () => {


    return (
        <>
            <BrowserRouter>
            <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<RutaNews></RutaNews>}></Route>
                    <Route path="/acciones" element={<RutaRiesgoPais></RutaRiesgoPais>}></Route>
                    <Route path="/dolar" element={<RutaPrecioDolar></RutaPrecioDolar>}></Route>
                    <Route path="/cripto" element={<RutaCripto></RutaCripto>}></Route>
                    <Route path="/*" element={<Navigate to={'/'}></Navigate>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}