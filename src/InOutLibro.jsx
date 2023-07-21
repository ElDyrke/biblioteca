import React from 'react'
import InLibro from './InLibro'
import OutLibros from './OutLibros'

const InOutLibro = ({option, setLibros}) => {
    
    console.log(setLibros)
    if (option === 0){
        return(
            <>
            </>
        )
    } else if(option === 1 || option === "1"){
        return(
            <InLibro setLibros={setLibros}/>
        )
    } else if (option === 2 || option === "2"){
        return (
            <OutLibros setLibros={setLibros}/>
        )
    }
}

export default InOutLibro