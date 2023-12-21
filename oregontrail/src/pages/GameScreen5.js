import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const GameScreen5 = () => {
    const Profession = useSelector(state => state.leaderProfession);
    return (
        <div>
            <p>Here is the information you put in.</p>
               <li>Leader's Profession: {Profession}</li>
                  <li>Leader's Name: </li>
                    <li>Party Members </li>
                    <li>Starting Month: </li>
        </div>
    );
};

export default GameScreen5;