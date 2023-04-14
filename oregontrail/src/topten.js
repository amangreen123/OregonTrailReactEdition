import React from "react";
import bg from "./images/gettyimages-3090888-2.jpg";
import "./topten..css"
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";
function TopTen (){
    return(
        <div className = "leaderboard" style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
            <h1>TOPTEN
            </h1>

           <div className={"bottomleft"} >
               <Fader text={"Press the spacebar to return to the main menu"}></Fader>
           </div>

            <table className={"leaderboard"}>
               <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                   <th className={"rank"}>Rank</th>
                   <th className={"name"}>Name</th>
                   <th className={"score"}>Score</th>
                   <th>Date</th>
               </tr>
                <input onKeyDown={Navigation} />
           </table>
        </div>
    )

}

export default TopTen