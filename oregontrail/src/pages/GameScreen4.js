import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bg from '../images/gettyimages-3090888-2.jpg';

const GameScreen4 = () => {
    const [startMonth, setStartMonth] = useState('');
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state);

    const updateMonth = (event) => {
        const month = event.target.id;

        dispatch({
            type: 'updateStartMonth',
            payload: { startMonth: month },
        });
    };

    useEffect(() => {
        if (startMonth !== '') {
            updateMonth();
        }
    }, [startMonth, dispatch]);

    const buttonClick = () => {
        if (startMonth === '') {
            alert('Please select a month');
            return;
        }
        updateMonth();
        window.location.href = '/GameScreen5';
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
            <p>Which month would you like to leave</p>
            <ol id="setupQuestions2">
                <li id="March" onClick={updateMonth}>
                    March
                </li>
                <li id="April" onClick={updateMonth}>
                    April
                </li>
                <li id="May" onClick={updateMonth}>
                    May
                </li>
                <li id="June" onClick={updateMonth}>
                    June
                </li>
                <li id="July" onClick={updateMonth}>
                    July
                </li>
            </ol>
            <button className="button-1" id="page1sub" onClick={buttonClick}>
                Next Page
            </button>
        </div>
    );
};

export default GameScreen4;