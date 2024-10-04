import {useEffect } from "react";

import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case " ":
                    navigate("/mainmenu");
                    break;
                case "3":
                    if (location.pathname === "/mainmenu") navigate("/topten");
                    break;
                case "2":
                    if (location.pathname === "/mainmenu") navigate("/setup");
                    break;
                case "1":
                    if (location.pathname === "/mainmenu") navigate("/trail");
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [navigate, location]);

    return null;
};


export default Navigation