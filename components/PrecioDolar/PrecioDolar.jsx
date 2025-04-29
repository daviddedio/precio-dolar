import { useState } from 'react'
import { Buscador } from '../Buscador/Buscador'
import { GraficConteiner } from '../GraficConteiner/GraficConteiner'
import { DolarConteiner } from '../DolarConteiner/DolarConteiner';
import { consultaRango, consultaPrecios, consultaPrecioMonedas } from "../../fetch/fetchData";
import './PrecioDolar.css'

export const PrecioDolar = () => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [dolar, setDolar] = useState(['invisible', 'invisible'])
    const [isOn, setIsOn] = useState(['no', 'no'])

    const btnOpciones = (dato) => {
        if (dato === 0) {
            setDolar(['visible', 'invisible'])
            setIsOn(['yes', 'no'])
        } else {
            setDolar(['invisible', 'visible'])
            setIsOn(['no', 'yes'])
        }
    }

    return (
        <div className='principal-conteiner-riesgo'>
            <h2>Historico - precio del dolar en Argentina</h2>
            <Buscador busca={year} setBusca={setYear} />
            <GraficConteiner curso={year} consulta={consultaRango(year)} />
            <hr />
            <h2>Divisas</h2>
            <p>Seleccione "Argentina" para ver precio de los distintos dolares argentinos. Selecicone "Region" para obtener los distintos precios de las monedas regionales y Europa</p>
            <ul className='dolarListado'>
                <li className={isOn[0]} onClick={() => btnOpciones(0)}>Argentina</li>
                <li className={isOn[1]} onClick={() => btnOpciones(1)}>Region</li>
            </ul>
            <div className="contenedorDeDolares">
                <div className={`dolares-argentina ${dolar[0]}`}>
                    <h2>Precio de los distintos dolares en Argentina</h2>
                    <DolarConteiner consulta={consultaPrecios} tipo={false} />
                </div>
                <div className={`dolares-region ${dolar[1]}`}>
                    <h2>Precio de las distintas monedas de la zona y Europa</h2>
                    <DolarConteiner consulta={consultaPrecioMonedas} tipo={true} />
                </div>
            </div>
        </div>
    )
}