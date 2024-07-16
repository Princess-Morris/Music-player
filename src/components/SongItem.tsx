import { FaPause, FaPlay } from "react-icons/fa";
import { IMusicPlay } from "../types/music";

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

  return (
    <div className="play-box">
      <div className="">
        <audio id={`audio-${id}`} src={song}></audio>
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
  );
}

export default SongItem;
