import { useState, useEffect } from "react"
import { CriptoCard } from "../CriptoCard/CriptoCard"
import { consultaCripto } from "../../fetch/fetchData"
import { ExchangeTable } from "../ExchangeTable/ExchangeTable"
import './PrecioCripto.css'

export const PrecioCripto = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(true)
        try {
            const datos = await consultaCripto()
            setData(datos)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h2>TOP 12 - Precio global de las distintas criptos en dolares</h2>
            <div className="cripto-container">
                {
                    loading ? <p>Cargando...</p> :
                        data.map((e, i) =>
                            <CriptoCard
                                key={i}
                                name={e.name}
                                nameid={e.nameid}
                                symbol={e.symbol}
                                price={e.price_usd}
                                rank={e.rank}
                                pChange1hr={e.percent_change_1h}
                                pChange24h={e.percent_change_24h}
                                pChange7d={e.percent_change_7d} />
                        )
                }
            </div>
            <hr />
            <h2>Exchanges - plataforma de intercambio de cripto mas importantes</h2>
                <ExchangeTable/>

        </>
    )
}