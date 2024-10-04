import axios from "axios";
import {useState} from "react";

const ChoosePace = async (newPace) => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const [selectedPace, setSelectedPace] = useState("");

    setSelectedPace(newPace);

    try {
        const response = await axios.get(`${apiUrl}/getAllPaces`, {
            params: {
                pace: newPace,
            },
        });

        console.log("Pace Data:", response.data);
    } catch (error) {
        console.error("Error fetching Pace data:", error);
    }
};


export default ChoosePace;