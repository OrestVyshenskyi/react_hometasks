import React from 'react';

const SpaceShip = ({ship}) => {

    return (
        <div className={'ship'}>
            <div>{ship.mission_name}</div>
            <div>{ship.launch_year}</div>
            <img src={ship.links.mission_patch_small} alt=""/>
        </div>
    );
};

export default SpaceShip;