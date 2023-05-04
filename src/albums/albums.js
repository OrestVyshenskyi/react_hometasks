import React, {useEffect, useState} from 'react';
import {albumService} from "../services/album.service";
import Album from "../album/album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(value => value.data).then(value => setAlbums(value))
    },[])

    return (
        <div>
            <h1 style={{textAlign:'center', margin:'70px', fontSize:'50px'}}>Albums</h1>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;