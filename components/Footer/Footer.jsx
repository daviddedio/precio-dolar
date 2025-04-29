import './Footer.css'
import { referencias } from '../../fetch/datos'
import { ListaReferencia } from '../ListaReferencia/ListaReferencia'

export const Footer = () => {
    const datos = referencias
    return( 
        <div className="footer-conteiner">
            <div className="apiLinks">
                <h2>Listado de ApiKeys utilizados que puedes copiar y utilizar</h2>
                <ul>
                    {datos.map((e,i)=>
                    <ListaReferencia
                    key={i}
                    titulo={e.titulo}
                    link={e.link}
                    descripcion={e.descripcion}
                    />)}
                </ul>
            </div>
        </div>
    )
}