import React from "react";
import {useEffect } from "react";

const Navigation = (event) => {
   console.log( "You pressed a key: " + event.key)

   let id = 'outer';
   let a = document.getElementsByClassName(id);
   a.tabIndex = '0';

   a.onkeydown = (event) => { event.target.focus()}

    useEffect(() => {
       const handleKeyPress = (event) => {
         if (event.key === " ") {
            window.location.href = "/mainmenu"
         }
         if (event.key === "3" && window.location.href === "http://localhost:3000/mainmenu" ) {
            window.location.href = "/topten"
         }
          if (event.key === "2" && window.location.href === "http://localhost:3000/mainmenu") {
             window.location.href = "/setup"
          }
          if (event.key === "1" && window.location.href === "http://localhost:3000/mainmenu") {
             window.location.href = "/trail"
          }

          if (window.location.href === "http://localhost:3000/GameScreen1") {
             if (event.key === "1") {
                window.location.href = "/GameScreen2"
             }
          }
       };
       document.addEventListener("keydown", handleKeyPress);
       return () => {
          document.removeEventListener("keydown", handleKeyPress);
       };
    }, []);



}



export default Navigation