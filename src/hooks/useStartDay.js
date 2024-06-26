import axios from "axios";

export const useStartDay = () => {
  const roomId = JSON.parse(localStorage.getItem("roomId"));

  const startDay = async () => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/startDay`
      );

      console.log("Data from the night:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startDay;
};
