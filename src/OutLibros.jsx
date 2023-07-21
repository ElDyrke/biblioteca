import React, { useState } from 'react'

const OutLibros = ({setLibros}) => {
    const [id, setId] = useState("")

    const handleChange = (e) => {
        setId(e.target.value)
    }

    const borrar = () => {
        var libros = JSON.parse(localStorage.getItem("libros")) 

        let filtro = libros.filter(libro => libro.id != id)
        
        setLibros(filtro)
    }

  return (
    <div>
        <label className='form-label'>ID</label>
        <input type="number" className='form-control' value={id} onChange={handleChange}/>

        <button type="button" className='btn btn-danger' onClick={borrar}>Eliminar</button>
    </div>
  )
}

export default OutLibros