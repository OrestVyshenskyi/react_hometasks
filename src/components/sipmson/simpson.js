import React from 'react';

const Simpson = ({item}) => {
    return (
        <div>
            <div><h2>{item.name} {item.surname}</h2></div>
            <div><h2>Age - {item.age}</h2></div>
            <div><p>{item.info}</p></div>
            <div className='photo' ><img src={item.photo} alt=""/></div>
            <hr/>
        </div>
    );
};

export default Simpson;