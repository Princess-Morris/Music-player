import { IMusic } from "../types/music"

function SongItem({id, title, artiste, genre, city}: IMusic) {
    return (
        <div className="play-box">
        <div className="title-style">
        title: {title}
        </div>

        <div className="artiste-style">
        artiste: {artiste}

        </div>
        </div>
    )
}

export default SongItem
