import React from "react";
import bg from "./images/gettyimages-3090888-2.jpg";
import "./topten..css"
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";
import Sortscore from "./components/Sortscore";

function TopTen (){
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
                    <td><Sortscore>score[0]</Sortscore></td>
                    <td>March 1, 1848</td>
                </tr>
                <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                    <td>2</td>
                    <td>John Smith</td>
                    <td><Sortscore>score[1]</Sortscore></td>
                    <td>March 1, 1848</td>
                </tr>
                <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                    <td>3</td>
                    <td>John Smith</td>
                    <td>8890</td>
                    <td>March 1, 1848</td>
                </tr>
                <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                    <td>4</td>
                    <td>John Smith</td>
                    <td>8890</td>
                    <td>March 1, 1848</td>
                </tr>
                <tr className={"player"} style={{fontSize:'20px',fontWeight:"bold"}}>
                    <td>5</td>
                    <td>John Smith</td>
                    <td>8890</td>
                    <td>March 1, 1848</td>
                </tr>
                <Navigation />
           </table>
        </div>
    )

}

export default TopTen