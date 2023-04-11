
import React from 'react';
import Simpson from "../sipmson/simpson";

const Simpsons = ({items:simpsons}) => {

    return (
        <div>
            {
                simpsons.map(value =>
                    (<Simpson item={value}/>)
                )
            }
        </div>
    );
};

export default Simpsons;