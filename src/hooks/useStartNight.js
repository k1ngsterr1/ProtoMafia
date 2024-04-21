import axios from "axios";

export const useStartNight = () => {
  const startNight = async () => {
    const roomId = JSON.parse(localStorage.getItem("roomId"));

    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/startNight``https://showtimeserver-production.up.railway.app/api/game/${roomId}/startNight`
      );

      console.log("Data from the night:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startNight;
};
