import { useState, useEffect } from "react";
import { consultaRango } from "../../fetch/fetchData";
import { Chart } from "react-google-charts";

import './GraficoDolarHistorico.css'

export const GraficoDolarHistorico = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [year, setYear] = useState('2025')
    const [rangeYear, setRangeYear] = useState([])

    const options = {
        title: "",
        curveType: "function",
        legend: { position: "bottom" },
    }

    const transformarNumeros = (array) => {
        var newArray = []
        newArray.push(array[0])
        var initArray = array.reverse()
        for (let index = 1; index < array.length; index++) {
            newArray.push([initArray[index][0], parseFloat(initArray[index][1]), parseFloat(initArray[index][2])])

        }

        return newArray
    }

    const getData = async () => {
        setLoading(true)
        try {
            const datos = await consultaRango(year)
            const datosTransf = transformarNumeros(datos)
            setData(datosTransf)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const cambioYear = (e)=>{
        e.preventDefault()
        setYear(e.target.value)
    }

    const getFullRangeYear = ()=>{
        const fullYear = new Date().getFullYear()
        const rangeYear = []
        for (let index = 0; index < 6; index++) {
            rangeYear.push(String(fullYear-index))
        }
        setRangeYear(rangeYear)
    }

    useEffect(() => {
        getData()
        getFullRangeYear()
    }, [year])

    return (
        <>
        <h2>Grafico del valor de dolar blue en el año seleccionado</h2>
            <div className="form-dolarHistorico">
                <label htmlFor="years"><b>Seleccionar un año especifico: </b></label>
                <select id="years" onChange={cambioYear}>
                    {rangeYear.map((e, i)=><option key={i} value={e}>Año - {e}</option>)}
                </select>
            </div>
            {
                loading ? <div className="skeleton-chart"></div> :
                    <Chart
                        chartType="AreaChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                        legendToggle
                    />
            }
        </>
    )
}