import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function Playing() {

 const [iconPlaying, setIconPlaying] = useState<boolean>(false)    

 function handleClick(){
   setIconPlaying(!iconPlaying)
 }

    return (
        <div className="card-style">
         <div className="playing-style">
          
          { iconPlaying ?
           <FaPlay 
           className="fa-play"
           onClick={handleClick}
            /> : 
            <FaPause
            className="fa-pause"
            onClick={handleClick}
             />
          }
      </div>

      {/* <div>
      {
              iconPlaying ? 
              <div>
                title: Grace
                artiste: TashaCobbs
                genre: soul
                city: Atlantic
                song: song
              </div> : 
                <div>
                    Hello dear
                </div>              
          }
         
      </div> */}
        </div>
       
    )
}

export default Playing