"use client"

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import "../components/global.css"

function GameScreen2({ onNext }) {
    const [leaderName, setLeaderName] = useState("")
    const dispatch = useDispatch()

    const updatePlayerName = () => {
        dispatch({
            type: "updatePlayerName",
            payload: { playerName: leaderName },
        })
    }

    useEffect(() => {
        if (leaderName !== "") {
            updatePlayerName()
        }
    }, [leaderName, updatePlayerName]) // Added updatePlayerName to dependencies

    const handleSubmit = (e) => {
        e.preventDefault()
        if (leaderName.trim() === "") {
            alert("Please enter a name for the leader")
            return
        }
        updatePlayerName()
        onNext()
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="screen-title">What is the name of the leader?</h2>
            <form onSubmit={handleSubmit}>
                <label className="input-label">
                    Leader Name:
                    <input
                        type="text"
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                        className="text-input"
                    />
                </label>
                <button type="submit" className="next-button">
                    Next
                </button>
            </form>
        </motion.div>
    )
}

export default GameScreen2

