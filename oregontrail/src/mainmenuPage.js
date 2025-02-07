import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import bg from "./images/gettyimages-3090888-2.jpg"
import "./mainmenu.css"

function MainMenuPage() {
    const menuItems = [
        { text: "Travel the trail", link: "/trail" },
        { text: "Set up for the trail", link: "/setup" },
        { text: "See the Oregon Top 10", link: "/topten" },
        { text: "Turn Sound (Off / On)", link: "#", onClick: () => console.log("Toggle sound") },
    ]

    return (
        <div className="main-menu" style={{ backgroundImage: `url(${bg})` }}>
            <div className="menu-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="menu-title"
                >
                    The Oregon Trail
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="menu-subtitle"
                >
                    Choose your next adventure
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="menu-list"
                >
                    {menuItems.map((item, index) => (
                        <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to={item.link} onClick={item.onClick} className="menu-item">
                                {item.text}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default MainMenuPage
