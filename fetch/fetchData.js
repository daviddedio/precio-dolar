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
export const consultaRango = async (year) => {
    const fechaInicioFinal = `01-01-${year}/31-12-${year}`
    const consulta = await fetch(`https://mercados.ambito.com//dolar/informal/historico-general/${fechaInicioFinal}`)
    const datos = consulta.json()
    /*console.log(datos)
    return datos*/
    //console.log(datos)
    const retorno = await transformData(datos)
    return retorno
}

export const transformData = async(arr)=>{
    var array = await arr
    var newArray = []
    newArray.push(array[0])
    var initArray = array.reverse()
    for (let index = 1; index < array.length; index++) {
        newArray.push([initArray[index][0], parseFloat(initArray[index][1]), parseFloat(initArray[index][2])])
    }
    return newArray
}

export const consultaPrecios = async () => {
    const res = await fetch('https://dolarapi.com/v1/dolares')
    const datos = await res.json()
    return datos
}

export const consultaPrecioMonedas = async () => {
    const res = await fetch('https://dolarapi.com/v1/cotizaciones')
    const datos = await res.json()
    return datos
}

export const consultaCripto = async () => {
    const res = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=12')
    const datos = await res.json()
    return datos['data']
}

export const consultaExchange = async (cantidad) => {
    const res = await fetch('https://api.coinlore.net/api/exchanges/')
    const datos = await res.json()
    const valoresObjeto = Object.values(datos)
    const array = []

    for (let index = 0; index < cantidad; index++) {
        array.push(valoresObjeto[index])
    }

    return array
}

export const consultaRiesgoPais = async (year) => {
    const array = [["fecha", "riesgo"]]
    const initArray = []
    const res = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais')
    const datos = await res.json()

    datos.forEach(element => {
        if (new Date(element.fecha).getFullYear().toString()==year){
            array.push([element.fecha, element.valor])
        }
    });

    //const byPassArray = initArray.reverse()
    return array
}

export const getCriptoHistory = async (cripto, api)=>{
    const res = await fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${cripto}&market=USD&apikey=${api}`)
    const datos = await res.json()
    const processData = await prepareData(datos)
    return processData
}

export const prepareData = async(arr)=>{
    const res = await arr
    console.log(res)
    const meta = res['Meta Data']
    const datos = res['Time Series (Digital Currency Daily)']

    const chartArray = [['Date', 'open', 'high', 'low', 'close']]
    for (const [date, values] of Object.entries(datos)){
        chartArray.push([
            date,
            parseFloat(values['1. open']),
            parseFloat(values['2. high']),
            parseFloat(values['3. low']),
            parseFloat(values['4. close']),
        ])
    }
    return chartArray
}

export const getNews = async()=>{
    const res = await fetch("https://finnhub.io/api/v1/news?category=general&token=cvu6v4hr01qjg137ufk0cvu6v4hr01qjg137ufkg")
    const data = await res.json()
    return data
}

export const getStock = async()=>{
    const res = await fetch("https://api.twelvedata.com/stocks")
    const data = await res.json()
    //console.log(data['data'])
    const filtro = data['data'].filter(item => item.country =='Argentina')
    return filtro
}