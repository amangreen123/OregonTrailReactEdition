import React from "react";


const Navigation = (event) => {
   console.log( "You pressed a key: " + event.key)

   let id = 'outer';
   let a = document.getElementsByClassName(id);
   a.tabIndex = '0';
   a.onclick = (event) => { event.target.focus()}
   a.onkeydown = (event) => {
      if(event.key === 'y'){
         alert('The sky is your starting point!')
      }

      else if (event.key === 'n') {
         alert('The sky is your limit👀')
      }

   }
   if (event.key === ' ') {
      window.location.href = "/mainmenu"
   }
   if (event.key === "3") {
      window.location.href = "/topten"
   }
   if (event.key === "2") {
      window.location.href = "/setup"
   }
   if (event.key === "1") {
      window.location.href = "/trail"
   }
}



export default Navigation