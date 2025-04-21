import { useState, useEffect } from "react"
import { Grafico } from "../Grafico/Grafico"
import './CriptoConteinerGrafico.css'

export const CriptoConteinerGrafico = ({ cripto, consulta, api }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(true)
        try {
            const datos = await fetch(consulta(cripto, api))
            setData(datos)
        } catch (error) {
            setError(error)
            console.log(error)
        } finally { setLoading(false) }
    }

    useEffect(() => {
        getData()
    }, [cripto, api])

    const options = {
        chart: {
            title: "Riesgo pais",
            subtitle: "Argentina",
        },
    }

    return (
        <div className="cripto-grafico-conteiner">
            {
                loading ? 
                    error ? <p>error de carga</p> 
                    : 
                        <p>cargando...</p>
                        :
                        <Grafico
                            data={data}
                            option={options}
                        />
            }
        </div>
    )
}