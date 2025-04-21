import { useState, useEffect } from "react"
import { DolarCard } from "../DolarCard/DolarCard"
import './DolarConteiner.css'

export const DolarConteiner = ({ consulta }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(false)
        try {
            const datos = await consulta()
            setData(datos)
        } catch (error) {
            setError(error.message())
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{getData()},[])

    return (
        <div className="dolar-container-items">
            {loading
                ? <p>Cargando...</p>
                : data.map((d, i) => <DolarCard key={i} compra={d.compra}
                    venta={d.venta}
                    casa={d.casa}
                    nombre={d.nombre} />)
            }
        </div>
    )
}