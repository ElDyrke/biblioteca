import React, {useState, useEffect} from 'react'
import InOutLibro from './InOutLibro'
import TablaLibros from './TablaLibros'

const Libro = ({libros, setLibros}) => {

    const [opcion, setOpcion] = useState(0)
    const handleChangeOpt = (e) => {
        setOpcion(e.target.value)
    }

  return (
    
    <div className='m-4 col-md-12'>
    <div className='row'>
        <div className="col-md-3">
            <label className='form-label'>Accion</label>
            <select value={opcion} onChange={handleChangeOpt} className='form-control mb-3'>
                <option value="0">No Seleccionado</option>
                <option value="1">Ingresar</option>
                <option value="2">Eliminar</option>
            </select>
            <InOutLibro option={opcion} setLibros={setLibros}/>
        </div>
        <div className="col-md-8">
            <TablaLibros libros={libros}/>
        </div>
    </div>
    </div>
  )
}

export default Libro