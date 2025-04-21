import { useState } from 'react'
import './MonedaCard.css'

export const MonedaCard = ({ compra, venta, casa, nombre }) => {

    return (
        <>
            <div className="Moneda-card">
                <h3>{nombre}</h3>
                <hr />
                <img src={`${nombre}.jpg`} alt="" className='img-MonedaCard' />
                <div className='info-MonedaCard'>
                    <p><b>Compra:</b> {compra}</p>
                    <p><b>Venta:</b> {venta}</p>
                </div>
            </div>
        </>
    )
}