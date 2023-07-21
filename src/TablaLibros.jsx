import React from 'react'

const TablaLibros = ({libros}) => {
    const traducir = (disp) => {
        if(disp === "Si" || disp == "No"){
            return disp
        }

        if (disp){
            return "Si"
        } else {
            return "No"
        }
    }

  return (
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>Disponible</th>
            </tr>
        </thead>
        <tbody>
            {
                libros.map(v => (
                    <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.titulo}</td>
                        <td>{traducir(v.disponible)}</td>
                    </tr>    
                ))
            }
        </tbody>
    </table>
  )
}

export default TablaLibros