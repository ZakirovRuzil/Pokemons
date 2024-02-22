import React from 'react';
import StatBlock from './components/StatBlock/StatBlock';
import './PokeInfoPage.css'
import { useParams } from 'react-router-dom';

const PokeInfoPage = () => {

    let {name} = useParams()

    return (
        <div className="wrapper">
            <div className="header-info">
                <a href="http://localhost:3000/">
                    <button className='btn'>back</button>
                </a>
            </div>
            <div className="content-info">
                <StatBlock name = {name}/>
            </div>
        </div>
    );
};

export default PokeInfoPage;