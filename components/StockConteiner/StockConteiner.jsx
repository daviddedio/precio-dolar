import { useState, useEffect } from "react"
import { getStock } from "../../fetch/fetchData"
import { StockComponent } from "../StockComponent/StockComponent"
import { InfoStock } from "../InfoStock/InfoStock"
import { FormBusqueda } from "../formBusqueda/FormBusqueda"
import './StockConteiner.css'

export const StockConteiner = () => {

    const [data, setData] = useState([])
    const [filtro, setFiltro] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        setLoading(true)
        try {
            const datos = await getStock()
            setData(datos)
            setFiltro(datos)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const filtrarNombre = (e)=>{
        const criterio = e.target.value.toUpperCase()
        const filtro = data.filter((item)=>item['name'].toUpperCase().includes(criterio))
        setFiltro(filtro)
    }

    useEffect(() => { getData() }, [])

    return (
        <div className="stock-conteiner">
            <h2>Informacion importante para la interpretacion de la informacion de la tabla de acciones que cotizan en bolsa de Argentina</h2>
            <InfoStock/>
            <h2>Tabla de las acciones que cotizan en bolsa de Argentina</h2>
            <p>Utilizar la tabla debajo para la busqueda de informacion. Consultar el siguiente <a href="https://www.investing.com/equities/argentina" target="_blank">Enlace</a> para datos financiero</p> 
            <FormBusqueda filtrar={filtrarNombre}/>
            <div className="stoc-contenedor-componente">
            {
                loading
                    ? <p>Cargando...</p>
                    : filtro.map((e, i) => <StockComponent
                        key={i}
                        name={e.name}
                        symbol={e.symbol}
                        exchange={e.exchange}
                        mic_code={e.mic_code}
                        type={e.type}
                        figi_code={e.figi_code}
                        cfi_code={e.cfi_code}
                        color={i % 2 == 0 ? "claro" : "obscuro"}
                    />)
            }
            </div>

        </div>
    )
}