import './dolarCard.css'

export const DolarCard = ({ moneda, compra, venta, casa, nombre, tipo }) => {

    return (
        <>
            <div className="dolar-card">
                <div className="data-dolar-card">
                    <div className="nombre">
                        <h3>{nombre}</h3>
                        <hr />
                    </div>
                    <div className="dolar-card-conteiner">
                        <div className="dolar-img-back">
                            <img src={`${tipo ? moneda : casa}.jpg`} alt={casa} className="img-dolarCard" />
                        </div>
                        <div className='info-dolarCard'>
                            <p><b>Compra:</b> {parseFloat(compra).toFixed(2)}$</p>
                            <p><b>Venta:</b> {parseFloat(venta).toFixed(2)}$</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}