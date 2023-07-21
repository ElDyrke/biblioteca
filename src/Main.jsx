import React, { useEffect, useState } from 'react'
import Libro from './Libro'

const Main = () => {
    const [libros, setLibros] = useState([])
    const [socios, setSocios] = useState([])

    const urlSocios = "http://45.236.130.191/api-prueba/biblioteca.php?action=socios"
    const urlLibros = "http://45.236.130.191/api-prueba/biblioteca.php?action=libros"
    
    const getLibros = async () => {
      const response = await fetch(urlLibros)
      const data = await response.json()
      setLibros(data)
    }
    const getSocios = async () => {
      const response = await fetch(urlSocios)
      const data = await response.json()
      setSocios(data)
    }

    useEffect(() => {
        if (localStorage.getItem("libros")){
          setLibros(JSON.parse(localStorage.getItem("libros")))
        } else {
          getLibros()
        }

        if (localStorage.getItem("socios")){
          setSocios(JSON.parse(localStorage.getItem("socios")))
        } else {
          getSocios()
        }
    },[])

    useEffect(() => {
      localStorage.setItem("libros", JSON.stringify(libros))
    }, [libros])

    useEffect(() => {
      localStorage.setItem("socios", JSON.stringify(socios))
    }, [socios])

  return (
    <>
    <h2>Libros</h2>
    <Libro libros={libros} setLibros={setLibros}/>
    </>
  )
}

export default Main