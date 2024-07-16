import { welcomeText } from "../types/music"

function Header ({text}: welcomeText){
    return (
        <h2 className="welcomeText">{text}</h2>
    )
}

export default Header