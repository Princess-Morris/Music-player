import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IMusicPlay } from "../types/music";
import ProgressBar from "./ProgressBar";

function SongItem({
  id,
  title,
  artiste,
  genre,
  city,
  song,
  songPlay,
  click,
}: IMusicPlay) {

  const [progress, setProgress] = useState(0)
  const songRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if(songRef.current){
      songRef.current.addEventListener('timeupdate', updateProgress);
      songRef.current.addEventListener('ended', () => setIsPlaying(false))
    }

    return () => {
      if(songRef.current){
        songRef.current.removeEventListener('timeupdate', updateProgress)
      }
    }
  }, [])

  function updateProgress(){
    if(songRef.current){
      const {currentTime, duration} = songRef.current;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100)
      }
    }
  }

  return (
    <div className="play-wrapper">
    <div className="play-box">
      <div className="">
      <audio ref={songRef} id={`audio-${id}`} src={song}></audio>
        <div className="title-style">title: {title}</div>

        <div className="artiste-style">artiste: {artiste}</div>
      </div>

      <div 
      className="icon"
      onClick={() => click(id)}
      >
        {songPlay === id ? <FaPause />  : <FaPlay />}
      </div>
    </div>
        <ProgressBar progress={progress} />
    </div>
   
  );
}

export default SongItem;
