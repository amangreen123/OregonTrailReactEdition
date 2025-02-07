import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import axios from "axios"
import "../components/global.css"

const GameScreen5 = () => {
    const { playerProfession, playerName, groupNames, startMonth, playerMoney } = useSelector((state) => state)
    const apiUrl = process.env.REACT_APP_API_URL

    const updateAllPlayerData = async () => {
        try {
            const playerData = {
                playerProfession,
                playerMoney,
                playerName,
                playerNames: Array.from(groupNames),
                startMonth,
            }

            const response = await axios.put(`${apiUrl}/setup/createPlayer`, playerData)

            if (response.status === 200) {
                window.location.href = "/trail"
                console.log("Player data updated successfully")
            } else {
                console.error("Error updating player data", response.status)
            }
        } catch (error) {
            console.error("Error updating player data", error)
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="screen-title">Review Your Information</h2>
            <ul className="review-list">
                <li>Leader's Profession: {playerProfession}</li>
                <li>Leader's Money: ${playerMoney}</li>
                <li>Leader's Name: {playerName}</li>
                <li>
                    Party Members:
                    <ul>
                        {groupNames.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </li>
                <li>Starting Month: {startMonth}</li>
            </ul>
            <button className="start-button" onClick={updateAllPlayerData}>
                Start Game
            </button>
        </motion.div>
    )
}

export default GameScreen5
