import { useState, useEffect } from "react"
import { CriptoCard } from "../CriptoCard/CriptoCard"
import { consultaCripto, getCriptoHistory } from "../../fetch/fetchData"
import { ExchangeTable } from "../ExchangeTable/ExchangeTable"
import { CriptoConteiner } from "../CriptoConteiner/CriptoConteiner"
import { CriptoConteinerGrafico } from "../CriptoConteinerGrafico/CriptoConteinerGrafico"
import './PrecioCripto.css'

export const PrecioCripto = () => {
    const [cripto, setCripto] = useState('BTC')
    const [api, setApi] = useState('')
    const setApiKey = (e) => {
        setApi(e.target.value)
    }

    return (
        <>
            <h2>TOP 12 - Precio global de las distintas criptos en dolares</h2>
            <CriptoConteiner consulta={consultaCripto} funcion={setCripto} />
            <hr />
            <div className="form-api">
                <label htmlFor="api">Ingrese su apiKey (pegar) en el cuadro siguiente y seleccione cualquier cripto en el listado superior</label>
                <input type="text" name="api" id="api" onChange={setApiKey} />
                <p>para conseguir su apiKey haga <a href="https://www.alphavantage.co/support/#api-key" target="_blank">click</a> aqui</p>
                <p>NOTA: Solo tiene disponible 25 consultas diarias</p>
            </div>
            <CriptoConteinerGrafico cripto={cripto} consulta={getCriptoHistory} api={api} />
            <h2>Exchanges (15) - plataforma de intercambio de cripto mas importantes</h2>
            <ExchangeTable />

        </>
    )
}