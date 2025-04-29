import './ListaReferencia.css'
export const ListaReferencia = ({titulo, link, descripcion}) => {
    return( 
        <div className='listado-api'>
            <h4>{titulo}</h4>
            <h5>ApiLink: <a href={link} target='_blank'>{link}</a></h5>
            <p>Descripcion: {descripcion}</p>
        </div>
    )
}