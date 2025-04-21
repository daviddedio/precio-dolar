import { Chart } from "react-google-charts"
export const Grafico = ({data, option}) => {
    return (
        <>
            <Chart
                chartType="AreaChart"
                width="100%"
                height="450px"
                data={data}
                options={option}
                legendToggle
            />
        </>
    )
}