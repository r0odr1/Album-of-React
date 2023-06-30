import React from 'react';
import { songs } from "../../Songs/Songs";
import { Album } from "../albums";

export const ListSongs = () => {
    const albums = songs

    return (
        <>
        {
            albums.map(song => (
                <Album
                    key={song.id}
                    image={song.cover_url}
                    name={song.name}
                    artist={song.artist}
                    album={song.album}
                    year={song.year}
                    genre={song.genre}
                    like={song.like}
                />
            ))
                
        }
        </>
    )
}