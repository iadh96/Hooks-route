import React from 'react'

function Trailer(props) {
    const Tr= props.Movies.find((el)=> el.id == props.match.params.id );
    
    
    return (
        <div>
            <h1>{Tr.title}</h1>
            <h1>{Tr.description }</h1>
            <iframe src={Tr.trailerlink }alt ="/"></iframe>
            <button onClick={()=>props.history.goBack()}>GOBACK</button>
            <button onClick={()=>props.history.push('/')}>home</button>
        </div>
    )
}

export default Trailer