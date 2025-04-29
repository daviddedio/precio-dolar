import { useEffect } from "react"
import { Chart } from "react-google-charts"
import './Grafico.css'
export const Grafico = ({data, option}) => {
    return (
        <div className="g-grafico-conteiner">
            <Chart
                chartType="AreaChart"
                width="90%"
                height="450px"
                data={data}
                options={option}
                legendToggle
            />
        </div>
    )
}