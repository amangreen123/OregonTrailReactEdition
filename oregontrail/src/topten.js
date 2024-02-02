import React from "react";
import bg from "./images/gettyimages-3090888-2.jpg";
import "./topten..css"
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";
import sortScore from "./components/Sortscore";

//this is the topten page of the app
//it is the page that is rendered when the topten button is clicked
//it displays the top ten scores of the game
//the scores are fetched from the server

function TopTen (){
    const sortedScores = sortScore()

    return(
        <div className = "leaderboard" style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
            <h1>TOPTEN</h1>

           <div className={"bottom"} >
               <h2><Fader text={"Press the spacebar to return to the main menu"}></Fader></h2>
           </div>
            <table className={"leaderboard"}>

                <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                    <td>1</td>
                    <td>John Smith</td>
                    <td>{sortedScores[0]}</td>
                    <td>March 1, 1848</td>
                </tr>
                <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                    <td>2</td>
                    <td>John Smith</td>
                    <td>{sortedScores[1]}</td>
                    <td>March 1, 1848</td>
                </tr>
                <Navigation />
           </table>
        </div>
    )

}

export default TopTen