import axios from "axios";

const ChoosePace = async (newPace, setSelectedPace) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    setSelectedPace(newPace);

    try {
        const response = await axios.get(`${apiUrl}/getAllPaces`, {
            params: {
                pace: newPace,
            },
        });

        console.log("Pace Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching Pace data:", error);
        throw error;
    }
};

export default ChoosePace;