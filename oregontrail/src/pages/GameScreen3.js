import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bg from '../images/gettyimages-3090888-2.jpg';

const GameScreen3 = () => {
    const [groupNames, setGroupNames] = useState({
        player1: '',
        player2: '',
        player3: '',
        player4: '',
    });

    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state);
    console.log('Redux State:', reduxState);

    const updateGroupName = () => {
        dispatch({
            type: 'updateGroupNames',
            payload: {
                playerNames: [
                    groupNames.player1,
                    groupNames.player2,
                    groupNames.player3,
                    groupNames.player4,
                ],
            },
        });
    };

    useEffect(() => {
        if (
            groupNames.player1 !== '' &&
            groupNames.player2 !== '' &&
            groupNames.player3 !== '' &&
            groupNames.player4 !== ''
        ) {
            updateGroupName();
        }
    }, [groupNames, dispatch]);

    const handleGroupNameChange = (e) => {
        const { name, value } = e.target;
        setGroupNames((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const buttonClick = () => {
        if (
            groupNames.player1 === '' ||
            groupNames.player2 === '' ||
            groupNames.player3 === '' ||
            groupNames.player4 === ''
        ) {
            alert('Please enter a name for each player');
            return;
        }
        updateGroupName();
        window.location.href = '/GameScreen4';
    };

    return (
        <div
            className="setup"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                height: '1000px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <p>What are the names of the Wagon Party</p>
            Player Name: <input name="player1" type="text" onChange={handleGroupNameChange} /><br />
            Player Name: <input name="player2" type="text" onChange={handleGroupNameChange} /><br />
            Player Name: <input name="player3" type="text" onChange={handleGroupNameChange} /><br />
            Player Name: <input name="player4" type="text" onChange={handleGroupNameChange} /><br />
            <input type="button" className="button-1" id="page2sub" value="Next" onClick={buttonClick} />
        </div>
    );
};

export default GameScreen3;