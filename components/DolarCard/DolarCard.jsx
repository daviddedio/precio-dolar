import './dolarCard.css'

export const DolarCard = ({ compra, venta, casa, nombre }) => {

    return (
        <>
            <div className="dolar-card">
                <h3>{nombre}</h3>
                <hr />
                <img src={`${casa}.jpg`} alt={casa} className="img-dolarCard" />
                <div className='info-dolarCard'>
                    <p><b>Compra:</b> {compra}</p>
                    <p><b>Venta:</b> {venta}</p>
                </div>
            </div>
        </>
    )
}