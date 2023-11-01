 import React, { useState } from 'react';
 import axios from "axios";

//
// const GameScreen3 = () => {
//
//     const [playerNames, setPlayerNames] = useState(["", "", "", ""]);
//
//     const handleGroupNames = (event) => {
//         const newPlayerNames = event.target.value;
//         setPlayerNames({
//             ...playerNames,
//             [event.target.id]: newPlayerNames,
//         });
//         console.log("Player Names :", event)
//     }
//
//     const updateGroupName  = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
//                    playerNames: playerNames,
//             });
//             setPlayerNames(response.data.playerNames);
//             console.log("Player Names :", response.data.playerNames)
//             console.log(response.status)
//         } catch (error) {
//             console.error('Error updating player name:', error);
//         }
//     }
//
//
//
//     return (
//         <div>
//             <p>What are the names of the Wagon Party</p>
//             Player Name: <input id="player1" onChange={(text ) => {
//                 handleGroupNames(text.target.value);
//             }} type="text" /><br />
//             Player Name: <input id="player2" /><br />
//             Player Name: <input id="player3" /><br />
//             Player Name: <input id="player4" /><br />
//             <input type="button" class="button-1" id="page2sub" value="Next" onClick={updateGroupName}/>
//         </div>
//     );
//
// };

 const GameScreen3 = () => {
     const [playerNames, setPlayerNames] = useState(["", "", "", ""]);

     const handleGroupNames = (event) => {
         const newPlayerNames = event.target.value;
         const updatedPlayerNames = [...playerNames];
         updatedPlayerNames[event.target.id] = newPlayerNames;
         setPlayerNames(updatedPlayerNames);
         console.log("Player Names:", updatedPlayerNames);
     }

     const updateGroupName = async () => {
         try {
             const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
                 playerNames: playerNames,
             });
             setPlayerNames(response.data.playerNames);
             console.log("Player Names:", response.data.playerNames);
             console.log(response.status);
         } catch (error) {
             console.error('Error updating player name:', error);
         }
     }

     return (
         <div>
             <p>What are the names of the Wagon Party</p>
             Player Name: <input id="0" onChange={handleGroupNames} type="text" /><br />
             Player Name: <input id="1" onChange={handleGroupNames} type="text" /><br />
             Player Name: <input id="2" onChange={handleGroupNames} type="text" /><br />
             Player Name: <input id="3" onChange={handleGroupNames} type="text" /><br />
             <input type="button" className="button-1" id="page2sub" value="Next" onClick={updateGroupName} />
         </div>
     );
 };

export default GameScreen3;