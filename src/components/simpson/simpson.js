import React from 'react';

const Simpson = ({item:value}) => {
    return (
        <div className='main_block'>

            <div className='name'><h2>{value.id} - {value.name}</h2></div>

            <div className='info'>
                <h4>Status - {value.status}</h4>
                <h4>Species - {value.species}</h4>
                <h4>Gender - {value.gender}</h4>
            </div>

            <div><img src={value.image} alt=""/></div>

        </div>
    );
};

export default Simpson;