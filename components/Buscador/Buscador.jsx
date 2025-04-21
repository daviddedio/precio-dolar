import { useState, useEffect } from "react"
import './Buscador.css'
export const Buscador = ({busca, setBusca}) => {

    const [rangeYear, setRangeYear] = useState([])

    const getFullRangeYear = ()=>{
        const rangeYear = []
        for (let index = 0; index < 6; index++) {
            rangeYear.push(String(busca-index))
        }
        setRangeYear(rangeYear)
    }

    const cambioYear = (e)=>{
        e.preventDefault()
        setBusca(e.target.value)
    }

    useEffect(()=>{
        getFullRangeYear()
    },[])

    return (
        <>
            <div className="form-buscador">
                <label htmlFor="years"><b>Seleccionar un año especifico: </b></label>
                <select id="years" onChange={cambioYear}>
                    {rangeYear.map((e, i) => <option key={i} value={e}>Año - {e}</option>)}
                </select>
            </div>
        </>
    )
}