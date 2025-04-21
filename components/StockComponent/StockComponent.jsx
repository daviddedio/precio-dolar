import './StockComponent.css'

export const StockComponent = ({name, symbol, exchange, mic_code, type, figi_code, cfi_code, color}) => {
    return( 
        <div className={`stock-row ${color}`}> 
            <div className="stock-header">
                <p><span>Exchange:</span>{exchange} <i className="fa-solid fa-arrow-right"/><span> Symbol:</span> {symbol} - <span>Nombre: </span>{name}</p>
            </div>
            <div className="stock-body">
                <p>
                    <span>mic-code:</span>{mic_code} -
                    <span>type</span> {type} -
                    <span>figi-code:</span> {figi_code} - 
                    <span>cfi-code</span> {cfi_code}
                </p>
            </div>
        </div>
    )
}