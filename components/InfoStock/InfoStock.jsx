import './InfoStock.css'
export const InfoStock = () => {
    return (
        <div className='info-stock'>
            <div className="Exchange">
                <p><span>Exchange: </span>Un exchange es una plataforma en la que se pueden comprar, vender e intercambiar activos financieros, como criptomonedas, acciones o divisas. Los exchanges de criptomonedas, por ejemplo, permiten a los usuarios intercambiar Bitcoin, Ethereum y otras monedas digitales por dinero fiat (como dólares o euros) o por otras criptomonedas.
                </p>
                <p>
                    Existen dos tipos principales de exchanges
                </p>
                <ul>
                    <li>
                        <span>Centralizados (CEX):</span> Son administrados por una empresa o entidad, que facilita las transacciones entre los usuarios y suele ofrecer mayor liquidez y seguridad.
                    </li>
                    <li>
                        <span>Descentralizados (DEX):</span> Funcionan sin una autoridad central, operando a través de contratos inteligentes en blockchain. Permiten a los usuarios intercambiar activos directamente entre ellos sin intermediarios.

                    </li>
                </ul>
            </div>
            <div className="miccode">
                <p><span>MIC Code (Market Identifier Code): </span> es un código único de cuatro caracteres alfanuméricos que identifica mercados financieros, bolsas de valores, plataformas de negociación y otros entornos de intercambio de activos. Es un estándar internacional definido por la norma ISO 10383, administrado por SWIFT, y se usa para mejorar la interoperabilidad entre mercados, reguladores y proveedores de datos
                </p>
                <p>
                    Existen dos tipos principales de MIC Codes
                </p>
                <ul>
                    <li>
                        <span>Operating MIC:</span>  Identifica una entidad que opera un mercado o plataforma de negociación.
                    </li>
                    <li>
                        <span>Segment MIC:</span>  Representa un segmento específico dentro de un mercado más grande.
                    </li>
                </ul>
            </div>
            <div className="figi">
                <p><span>FIGI Code (Financial Instrument Global Identifier)</span> es un identificador único para instrumentos financieros, como acciones, bonos, derivados y criptomonedas. Fue desarrollado por Bloomberg y es administrado como un estándar abierto por la Object Management Group (OMG)
                </p>
                <p>
                    Algunas características clave del FIGI:
                </p>
                <ul>
                    <li>
                        <span>Unico y permanente</span>   Una vez asignado, no cambia ni se reutiliza.
                    </li>
                    <li>
                        <span>Global</span>  Se usa en múltiples mercados y clases de activos.
                    </li>
                    <li>
                        <span>Semánticamente neutro:</span>  No contiene información sobre el instrumento ni el emisor, sino que se vincula a metadatos específicos.
                    </li>
                </ul>
                <a href="https://www.openfigi.com/">Mas info!</a>
            </div>
            <div className="cfi">
                <p><span>CFI Code (Classification of Financial Instruments)</span> es un código de seis caracteres utilizado para clasificar y describir instrumentos financieros, como acciones, bonos y derivados. Es un estándar internacional definido por la norma ISO 10962
                </p>
                <a href="https://www.iotafinance.com/en/Classification-of-Financial-Instrument-codes-CFI-ISO-10962.html">Mas info!</a>
            </div>
        </div>
    )
}