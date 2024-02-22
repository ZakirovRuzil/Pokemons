import './StatBlock.css'
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
        console.log(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
    }, [])
    
    return (
        <div className="wrapper-info">
            <div className='stat-card stat-card_general'>
                <div className="stat-card__wrapper">
                    {data.stats && data.stats.length > 0 && ( 
                        <>
                        <div className="stat-card__general-header">
                            <div className="number-name">
                                <h3>#{data.id.toString().padStart(3, '0')}</h3>
                                <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                            </div>
                            <div className="types-info">
                                {data.types.map((type, i) => {
                                    return (
                                        <button
                                            key={i}
                                            className="type"
                                            // style={{ backgroundColor: typeof backgroundColor === 'string' ? backgroundColor : '' }}
                                        >
                                            {type.type.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="stat-card__general-content">
                            <div className="stats">
                                <h4>HP: {data.stats[0].base_stat}</h4>
                                <h4>Attack: {data.stats[1].base_stat}</h4>
                                <h4>Defense: {data.stats[2].base_stat}</h4>
                                <h4>Speed: {data.stats[5].base_stat}</h4>
                            </div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
                        </div>
                        </>
                    )}
                </div>
            </div>
            
            <div className="stat-card stat-card_breeding">
                <div className="stat-card__wrapper">
                    <div className="stat-card__header">
                        <h2>Breeding</h2>
                    </div>

                    <div className="stat-card__breeding-content">
                        <div className="breeding-content">
                            <h4>Height</h4>
                            <div>
                                <h4>
                                {data.height ? (
                                    data.height.toString().length === 1
                                        ? `0.${data.height} m`
                                        : `${data.height.toString().slice(0, -1)}.${data.height.toString().slice(-1)} m`
                                ) : (
                                    'Unknown'
                                )}
                                </h4>
                            </div>
                        </div>
                        <div className="breeding-content">
                            <h4>Weight</h4>
                            <div>
                                <h4>
                                {data.weight ? (
                                    data.weight.toString().length === 1
                                        ? `0.${data.weight} m`
                                        : `${data.weight.toString().slice(0, -1)}.${data.weight.toString().slice(-1)} kg`
                                ) : (
                                    'Unknown'
                                )}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default StatBlock;