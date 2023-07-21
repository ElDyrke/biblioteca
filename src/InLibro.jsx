import React, { useState } from 'react'

const InLibro = ({setLibros}) => {

    const [libro, setState] = useState({
        id: "",
        titulo: "",
        disponible: ""
    })

    const handleChangeLibro = (e) => {
        const {name, value} = e.target
        setState((old) => ({...old, [name]:value}))

        // auto id
        var len = (JSON.parse(localStorage.getItem("libros"))).length
        setState((old) => ({...old, id:len+1}))
    }

    const guardar = () => {
        setLibros((old) => ([...old, libro]))
        setState({
            id: "",
            titulo: "",
            disponible: ""
        })
    }

  return (
    <div>
        <label className='form-label'>Titulo</label>
        <input type="text" name='titulo' className='form-control' placeholder='Ingrese Titulo' value={libro.titulo} onChange={handleChangeLibro}/>
        <label className='form-label'>Disponible</label>
        <input type="text" maxLength={2} name='disponible' className='form-control' placeholder='Escriba "Si" o "No"' value={libro.disponible} onChange={handleChangeLibro}/>
    
        <button type='button' className='btn btn-success mt-2' onClick={guardar}>Guardar</button>
    </div>
  )
}

export default InLibro