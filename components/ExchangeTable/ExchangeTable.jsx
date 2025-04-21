import { useState, useEffect } from "react"
import { consultaExchange } from "../../fetch/fetchData"
import './ExchangeTable.css'
export const ExchangeTable = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(true)
        try {
            const datos = await consultaExchange(15)
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
            <div className="table-container">
                <table className="exchange-table">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Pais</th>
                        <th>Enlace</th>
                    </tr>
                    {loading ? <tr><td>Cargando...</td><td>Cargando...</td><td>Cargando...</td><td>Cargando...</td></tr> :
                        data.map((e, i) =>
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.country}</td>
                                <td><a href={e.url} target="_Blank">{e.url}</a></td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    )
}