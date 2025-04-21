import './FormBusqueda.css'
export const FormBusqueda = ({filtrar}) => {
    return( 
        <div>
            <form action="" className="form-busqueda-stock" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="formBusqueda">Busqueda dinamica: </label>
                <input type="text" id="formBusqueda" name="formBusqueda" onChange={(e)=>filtrar(e)}/>
            </form>
        </div>
    )
}