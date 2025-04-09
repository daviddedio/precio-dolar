import { useState, useEffect } from "react"
import './CriptoCard.css'

export const CriptoCard = ({ symbol, name, nameid, price, rank, pChange1hr, pChange7d, pChange24h }) => {
    return (
        <div className="cripto-card">
            <h3><b>{symbol}</b> {name} - <i>({nameid})</i> <span>(Rank: {rank})</span></h3>
            <hr />
            <div className='info-criptoCard'>
                <p><b>Precio:</b> {Number(price).toFixed(2)}</p>
            </div>
            <div className="est-critoCard">
                <div>
                    <h5>% Cambio 1h</h5>
                    <p>{pChange1hr} <span> 
                    {pChange1hr > 0 ?
                        <i className="fa-solid fa-arrow-trend-up c-green"></i>
                        :
                        <i className="fa-solid fa-arrow-trend-down c-red"></i>}</span></p>
                </div>
                <div>
                    <h5>% Cambio 24h</h5>
                    <p>{pChange24h}<span> 
                    {pChange24h > 0 ?
                        <i className="fa-solid fa-arrow-trend-up c-green"></i>
                        :
                        <i className="fa-solid fa-arrow-trend-down c-red"></i>}</span></p>
                </div>
                <div>
                    <h5>% Cambio 7d</h5>
                    <p>{pChange7d}<span> 
                    {pChange7d > 0 ?
                        <i className="fa-solid fa-arrow-trend-up c-green"></i>
                        :
                        <i className="fa-solid fa-arrow-trend-down c-red"></i>}</span></p>
                </div>
            </div>
        </div>
    )
}