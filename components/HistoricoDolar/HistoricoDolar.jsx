import { consultaRango } from "../../fetch/fetchData"
import { useState, useEffect } from "react"

export const HistoricoDolar = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fechtData = async()=>{
        setLoading(true)
        try {
            const datos = await consultaRango('2024')
            console.log(datos)
            setData(datos)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fechtData()
    },[])
    return( 
        <div> {
            loading ? <p> cargando...</p> :
            data.length
            } </div>
    )
}