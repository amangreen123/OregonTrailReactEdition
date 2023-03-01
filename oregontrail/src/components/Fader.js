import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import '../App.css'
const Fader = ({text}) => {

    const [fadeProp,setFadeProp] = useState({
        fade: 'fade-out'
    })

    useEffect(()=> {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
               setFadeProp({
                   fade:'fade-out'
               })
            }else{
                setFadeProp({
                    fade:'fade-in'
                })
            }
        },1000)

        return () => clearInterval(timeout)
    },  [fadeProp])

    return(
       <><text className={fadeProp.fade}>{text}</text>
       </>
    )
}


Fader.propTypes = {
 text:PropTypes.string
}

export default Fader