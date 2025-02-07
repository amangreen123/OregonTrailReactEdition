import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import "../components/global.css"

const GameScreen1 = ({ onNext }) => {
    const [playerProfession, setPlayerProfession] = useState("")
    const [playerMoney, setPlayerMoney] = useState(0)
    const dispatch = useDispatch()

    const updatePlayerData = () => {
        dispatch({
            type: "updatePlayerData",
            payload: { playerProfession, playerMoney },
        })
    }

    useEffect(() => {
        if (playerProfession !== "" && playerMoney !== 0) {
            updatePlayerData()
        }
    }, [playerProfession, playerMoney, updatePlayerData]) // Added updatePlayerData to dependencies

    const handleProfession = (profession) => {
        const moneyMap = { Banker: 2000, Carpenter: 1500, Farmer: 1000 }
        setPlayerMoney(moneyMap[profession] || 0)
        setPlayerProfession(profession)
    }

    const playerSubmit = () => {
        if (playerProfession === "") {
            alert("Please select a profession")
            return
        }
        updatePlayerData()
        onNext()
    }

    const differencesMenuItem = () => {
        alert("Banker: Starts with $2000, Carpenter: Starts with $1500, Farmer: Starts with $1000")
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="screen-title">Choose your Profession</h2>
            <p>You may:</p>
            <ul className="profession-list">
                {["Banker", "Carpenter", "Farmer"].map((profession) => (
                    <li
                        key={profession}
                        onClick={() => handleProfession(profession)}
                        className={`profession-item ${playerProfession === profession ? "selected" : ""}`}
                    >
                        Be a {profession.toLowerCase()} from{" "}
                        {profession === "Banker" ? "Boston" : profession === "Carpenter" ? "Ohio" : "Illinois"}
                    </li>
                ))}
                <li onClick={differencesMenuItem} className="profession-item info">
                    Find out the differences between the choices
                </li>
            </ul>
            <p className="selection-info">You have chosen: {playerProfession || "None"}</p>
            <p className="selection-info">Your starting money: ${playerMoney}</p>
            <button className="next-button" onClick={playerSubmit}>
                Next
            </button>
        </motion.div>
    )
}

export default GameScreen1