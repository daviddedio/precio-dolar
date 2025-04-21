import { useState } from 'react'
import { Buscador } from '../Buscador/Buscador'
import { GraficConteiner } from '../GraficConteiner/GraficConteiner'
import { DolarConteiner } from '../DolarConteiner/DolarConteiner';
import { consultaRango, consultaPrecios, consultaPrecioMonedas } from "../../fetch/fetchData";
import './PrecioDolar.css'

export const PrecioDolar = () => {
    const [year, setYear] = useState(new Date().getFullYear())
    
    return (
        <div className='principal-conteiner-riesgo'>
            <h2>Precio del dolar en Argentina</h2>
            <Buscador busca={year} setBusca={setYear} />
            <GraficConteiner curso={year} consulta={consultaRango(year)}/>
            <hr />
            <h2>Precio de los distintos dolares en Argentina</h2>
            <DolarConteiner consulta={consultaPrecios}/>
            <hr />
            <h2>Precio de las distintas monedas de la zona</h2>
            <DolarConteiner consulta={consultaPrecioMonedas}/>
        </div>
    )
}