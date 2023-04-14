import React from "react";


const Navigation = (event) => {
   console.log( "You pressed a key: " + event.key)

   if(event.key === 'y'){
      alert('The sky is your starting point!')
   }
   if (event.keyCode === 32) {
      window.location.href = "/mainmenu"
   }
   if (event.key === "Digit3") {
      window.location.href = "/topten"
   }
   if (event.key === "Digit2") {
      window.location.href = "/setup"
   }
   if (event.key === "Digit1") {
      window.location.href = "/trail"
   }
   else if (event.key === 'n') {
      alert('The sky is your limit👀')
   }
}



export default Navigation