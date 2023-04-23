import React, {useEffect, useState} from 'react';
import SpaceShip from "../spaceShip/spaceShip";

const SpaceShips = () => {
    const [spaceShips, setSpaceShips] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allShips => {
                setSpaceShips(allShips)
            })

    },[])

    const filter = spaceShips.filter(ship => ship.launch_year !== '2020');

    return (
        <div className={'ships'}>
            {
                filter.map(ship => <SpaceShip key={ship.id} ship={ship}/>)
            }
        </div>
    );
};

export default SpaceShips;