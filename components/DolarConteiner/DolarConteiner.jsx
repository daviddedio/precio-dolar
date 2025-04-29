import { useState, useEffect } from "react"
import { DolarCard } from "../DolarCard/DolarCard"
import './DolarConteiner.css'

export const DolarConteiner = ({ consulta, tipo }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(false)
        try {
            const datos = await consulta()
            console.log(datos)
            setData(datos)
        } catch (error) {
            setError(error.message())
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { getData() }, [])

    return (
        <div className="dolar-container-items">
            {loading
                ? <p>Cargando...</p>
                : data.map((d, i) => <DolarCard
                    key={i}
                    moneda={d.moneda}
                    compra={d.compra}
                    venta={d.venta}
                    casa={d.casa}
                    nombre={d.nombre}
                    tipo={tipo}
                />)
            }
        </div>
    )
}