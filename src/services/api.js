import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get(`https://santosnr6.github.io/Data/events.json`);
        return response.data.events
    } catch (err) {
        throw new Error("Something went wrong with the API fetch: " + err.message);
      }     
}