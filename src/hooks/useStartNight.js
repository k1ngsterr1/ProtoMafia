import axios from "axios";

export const useStartNight = () => {
  const startNight = async (roomId) => {
    // console.log("room id is here:", roomId);

    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/startNight`
      );

      console.log("Data from the night:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startNight;
};
