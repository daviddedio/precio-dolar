import { useState, useEffect } from "react"
import { Grafico } from "../Grafico/Grafico"
import { getCriptoHistory } from "../../fetch/fetchData"
import './CriptoConteinerGrafico.css'

export const CriptoConteinerGrafico = ({ cripto, api }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const getData = async()=>{
        setLoading(true)
        try {
            const datos = await getCriptoHistory(cripto, api)
            setData(datos)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const options = {
        chart: {
            title: "Precio API",
            subtitle: "Cripto",
        },
    }

    return (
        <div className="cripto-grafico-conteiner">
            <h2>Cripto: {cripto} (U$D)</h2>
            {
                loading ?
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