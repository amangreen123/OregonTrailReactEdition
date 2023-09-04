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
             event.preventDefault();
            window.location.href = "/mainmenu"
         }
         if (event.key === "3" ) {
             event.preventDefault();
            window.location.href = "/topten"
         }
          if (event.key === "2"  ) {
              event.preventDefault();
             window.location.href = "/setup"
          }
          if (event.key === "1") {
              event.preventDefault();
             window.location.href = "/trail"
          }
       };
       document.addEventListener("keydown", handleKeyPress);
       return () => {
          document.removeEventListener("keydown", handleKeyPress);
       };
    }, []);



}



export default Navigation