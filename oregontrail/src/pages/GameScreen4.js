import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import "../components/global.css"

const GameScreen4 = ({ onNext }) => {
    const [startMonth, setStartMonth] = useState("")
    const dispatch = useDispatch()

    const updateMonth = (month) => {
        setStartMonth(month)
    }

    useEffect(() => {
        if (startMonth !== "") {
            dispatch({
                type: "updateStartMonth",
                payload: { startMonth },
            })
        }
    }, [startMonth, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (startMonth === "") {
            alert("Please select a month")
            return
        }
        onNext()
    }

    const months = ["March", "April", "May", "June", "July"]

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="screen-title">Which month would you like to leave?</h2>
            <form onSubmit={handleSubmit}>
                <ul className="month-list">
                    {months.map((month) => (
                        <li
                            key={month}
                            onClick={() => updateMonth(month)}
                            className={`month-item ${startMonth === month ? "selected" : ""}`}
                        >
                            {month}
                        </li>
                    ))}
                </ul>
                <button type="submit" className="next-button">
                    Next
                </button>
            </form>
        </motion.div>
    )
}

export default GameScreen4
