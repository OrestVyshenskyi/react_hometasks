import './album.styles.css'
import React from 'react';

const Album = ({album}) => {
    const {id, title} = album
    return (
        <div className={'info'}>
            <div>{id} - {title}</div>
        </div>
    );
};

export default Album;