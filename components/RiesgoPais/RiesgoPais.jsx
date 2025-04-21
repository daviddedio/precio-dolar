import { useState } from 'react'
import { Buscador } from '../Buscador/Buscador'
import { GraficConteiner } from '../GraficConteiner/GraficConteiner'
import { consultaRiesgoPais } from '../../fetch/fetchData'
import { StockConteiner } from '../StockConteiner/StockConteiner'
import { InfoRiesgo } from '../InfoRiesgo/InfoRiesgo'

import './RiesgoPais.css'

//https://www.youtube.com/watch?v=MkZyjJS_Hto

export const RiesgoPais = () => {
    const [year, setYear] = useState(new Date().getFullYear())

    return (
        <>
            <div className='principal-conteiner-riesgo'>
                <h2>Riesgo pais en Argentina</h2>
                <InfoRiesgo />
                <Buscador busca={year} setBusca={setYear} />
                <GraficConteiner curso={year} consulta={consultaRiesgoPais(year)} />
                <StockConteiner />
            </div>
        </>
    )
}