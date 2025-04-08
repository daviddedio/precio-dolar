import { useState, useEffect } from "react"
import { consultaPrecios } from "../../fetch/fetchData"
import { DolarCard } from "../DolarCard/DolarCard"
import { GraficoDolarHistorico } from "../GraficoDolarHistorico/GraficoDolarHistorico"
import './PrecioDolar.css'

export const PrecioDolar = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchingData = async () => {
        setLoading(true)
        try {
            const datos = await consultaPrecios()
            setData(datos)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchingData() }, [])
    return (
        <>
            <div className="chart-dolar">
                <GraficoDolarHistorico />
            </div>
            <hr />
            <h2>Precio de los distintos dolares en Argentina</h2>
            <div className="dolar-container">
                {loading ? <p>cargando..</p> : data.map((d, i) => <DolarCard key={i} compra={d.compra} venta={d.venta} casa={d.casa} nombre={d.nombre} />)}
            </div>
        </>
    )
}