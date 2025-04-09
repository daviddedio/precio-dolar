import { useState, useEffect } from "react"
import { consultaPrecioMonedas, consultaPrecios } from "../../fetch/fetchData"
import { DolarCard } from "../DolarCard/DolarCard"
import { GraficoDolarHistorico } from "../GraficoDolarHistorico/GraficoDolarHistorico"
import './PrecioDolar.css'

export const PrecioDolar = () => {

    const [data, setData] = useState([])
    const [dataBis, setDataBis] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchingData = async () => {
        setLoading(true)
        try {
            const datos = await consultaPrecios()
            const datos2 = await consultaPrecioMonedas()
            setData(datos)
            setDataBis(datos2)
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
            <hr />
            <h2>Precio de las distintas monedas de la region</h2>
            <div className="dolar-container">
                {loading ? <p>cargando..</p> : dataBis.map((d, i) => <DolarCard key={i} compra={d.compra} venta={d.venta} casa={d.casa} nombre={d.nombre} />)}
            </div>
        </>
    )
}