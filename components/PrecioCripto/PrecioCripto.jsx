import { useState, useEffect } from "react"
import { consultaCripto } from "../../fetch/fetchData"
import { ExchangeTable } from "../ExchangeTable/ExchangeTable"
import { CriptoConteiner } from "../CriptoConteiner/CriptoConteiner"
import './PrecioCripto.css'
import '../../public/index.css'

export const PrecioCripto = () => {
    const [cripto, setCripto] = useState('BTC')
    const [api, setApi] = useState('')
    
    const setApiKey = (e) => {
        setApi(e.target.value)
    }

    return (
        <div className="data-conteiner">
            <h2>TOP 12 - Precio global de las distintas criptos en dolares</h2>
            <div className="form-api">
                <label htmlFor="api">Ingrese su apiKey (pegar) en el cuadro siguiente y seleccione cualquier cripto en el listado superior</label>
                <input type="text" name="api" id="api" onChange={setApiKey} />
                <p>para conseguir su apiKey haga <a href="https://www.alphavantage.co/support/#api-key" target="_blank">click</a> aqui</p>
                <p>NOTA: Solo tiene disponible 25 consultas diarias</p>
            </div>
            <CriptoConteiner api={api} />
            <hr />
            <h2>Exchanges (15) - plataforma de intercambio de cripto mas importantes</h2>
            <ExchangeTable />

        </div>
    )
}