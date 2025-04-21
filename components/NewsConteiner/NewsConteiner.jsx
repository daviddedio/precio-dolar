import { useEffect, useState } from "react"
import { getNews } from "../../fetch/fetchData"
import { NewsPaper } from "../NewsPaper/NewsPaper"
import './NewsConteiner.css'

export const NewsConteiner = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(true)
        try {
            const datos = await getNews()
            setData(datos)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { getData() }, [])

    return (
        <>
            <h2 className="titulo-news">Noticias y articulos sobre el mercado financiero mundial</h2>
            <div className="news-container-items">
                {
                    loading
                        ? <p>Cargando...</p>
                        : data.map((e, i) => <NewsPaper
                            key={i}
                            headline={e.headline}
                            date={new Date(e.datetime).toLocaleString()}
                            image={e.image}
                            summary={e.summary}
                            source={e.source}
                            url={e.url}
                        />)
                }
            </div>
        </>
    )
}