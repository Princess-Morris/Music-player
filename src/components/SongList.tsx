import { useState } from "react"
import { songArr } from "../mock/songArr"
import SongItem from "./SongItem"

function SongList () {

    const [songPlaying, setSongPlaying] = useState<string | undefined>(undefined)

    function handlePlay(song_id: string) {
        const SongList= document.querySelectorAll('audio');
        SongList.forEach((song: HTMLAudioElement) => {
            song.pause()
            song.currentTime = 0

            if(song_id === songPlaying){
                setSongPlaying(undefined)
                return
            }

            setSongPlaying(song_id)

            const songToPlay: HTMLAudioElement | null = document.querySelector(`#audio-${song_id}`);

            if(songToPlay !== null){
                songToPlay.play()
            }
        })
    }

    return (
        <>
        {songArr.map((item, i) => (
            <SongItem 
            key={i}
            id={item.id}
            title={item.title}
            artiste={item.artiste}
            genre={item.genre}
            city={item.city}
            song={item.song}
            songPlay={songPlaying}
            click={handlePlay}
            />
        ))}
        </>
    )
}

export default SongList