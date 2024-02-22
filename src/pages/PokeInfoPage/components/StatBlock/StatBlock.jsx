import React, { useEffect, useState } from 'react';

const StatBlock = (props) => {

    const [data, setData] = useState([])
    
    async function getInfo(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        const data = await response.json()
        setData(data)
    }

    useEffect(() =>{
        getInfo()
    }, [])
    
    return (
        
        <div>
            <h3>ID: {data?.id}</h3>
            <h3>Name: {data?.name}</h3>
            <h4>Height: {data?.height}</h4>
            <h4>Weight: {data?.weight}</h4>
        </div>
    );
};

export default StatBlock;