import {useEffect, useState} from "react";

import {getAlbums} from "../../services/services";

import AlbumComponent from "../../components/AlbumComponent";

export default function Albums() {
    let [albums, setAlbums] = useState([]);

    useEffect( () => {
        getAlbums.then((value)=> setAlbums([...value]))
    },[])

    return (
        <div>
            {albums.map(album=> <AlbumComponent
                key={album.id}
                album={album}
            />)}
        </div>
    )
}