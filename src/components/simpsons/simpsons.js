import React from 'react';
import Simpson from "../simpson/simpson";

const Simpsons = ({item: simpsons}) => {
    return (
        <div>{
            simpsons.map(value => (<Simpson item={value}/>))
        }</div>
    );
};

export default Simpsons;