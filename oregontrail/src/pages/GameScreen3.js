import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import "../components/global.css"

const GameScreen3 = ({ onNext }) => {
    const [groupNames, setGroupNames] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: "",
    })

    const dispatch = useDispatch()

    const updateGroupName = () => {
        dispatch({
            type: "updateGroupNames",
            payload: {
                playerNames: Object.values(groupNames),
            },
        })
    }

    useEffect(() => {
        if (Object.values(groupNames).every((name) => name !== "")) {
            updateGroupName()
        }
    }, [groupNames, updateGroupName]) // Added updateGroupName to dependencies

    const handleGroupNameChange = (e) => {
        const { name, value } = e.target
        setGroupNames((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(groupNames).some((name) => name.trim() === "")) {
            alert("Please enter a name for each player")
            return
        }
        updateGroupName()
        onNext()
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="screen-title">What are the names of the Wagon Party?</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(groupNames).map((player, index) => (
                    <label key={player} className="input-label">
                        Player {index + 1} Name:
                        <input
                            name={player}
                            type="text"
                            onChange={handleGroupNameChange}
                            value={groupNames[player]}
                            className="text-input"
                        />
                    </label>
                ))}
                <button type="submit" className="next-button">
                    Next
                </button>
            </form>
        </motion.div>
    )
}

export default GameScreen3
