import React from 'react';
import StatBlock from './components/StatBlock/StatBlock';
import { useParams } from 'react-router-dom';

const PokeInfoPage = () => {

    let {name} = useParams()

    return (
        <div>
            <StatBlock name = {name}/>
        </div>
    );
};

export default PokeInfoPage;