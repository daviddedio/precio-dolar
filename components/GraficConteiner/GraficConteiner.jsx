import { useState, useEffect } from 'react'
import { Grafico } from '../Grafico/Grafico'
import { consultaRiesgoPais } from '../../fetch/fetchData'
import './GraficConteiner.css'

export const GraficConteiner = ({curso, consulta}) => {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const getData = async () => {
        setLoading(true)
        try {
            const datos = await consulta
            setData(datos)
        } catch (error) {

        } finally { setLoading(false) }
    }

    useEffect(() => {getData()}, [curso])

    const options = {
        chart: {
            title: "Riesgo pais",
            subtitle: "Argentina",
        },
    }
    return( 
        <div className="chart-conteiner">
        {
            loading
                ? <div className="skeleton-chart"/>
                : <Grafico data={data} option={options} />
        }
    </div>
    )
}