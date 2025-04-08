/*Chart google
https://www.react-google-charts.com/examples/line-chart
https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT
https://www.coinlore.com/es/cryptocurrency-data-api
https://github.com/public-apis/public-apis#cryptocurrency

https://mercados.ambito.com//dolar/informal/historico-general/01-01-2024/31-12-2024
*/

/**
 * Esta funcion devuelve un fetch de valores del dolar entre 2 fechas
 * @param {string} year agregar un year
 */
export const consultaRango = async(year)=>{
    const fechaInicioFinal = `01-01-${year}/31-12-${year}`
    const consulta = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${fechaInicioFinal}`)
    const datos = consulta.json()
    return datos
}

export const consultaPrecios = async()=>{
    const res = await fetch('https://dolarapi.com/v1/dolares')
    const datos = await res.json()
    return datos
}