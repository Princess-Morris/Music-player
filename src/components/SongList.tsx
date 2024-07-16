import { songArr } from "../mock/songArr"
import SongItem from "./SongItem"


function SongList () {
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
            />
        //  <div key={i}>{item.artiste} </div>
        ))}
        </>
    )
}

export default SongList