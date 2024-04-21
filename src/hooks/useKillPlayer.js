import axios from "axios";

export const useKillPlayer = () => {
  const killPlayer = async (roomId, playerId) => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/kill/${playerId}/${roomId}`
      );
      console.log("Data from kill the player from the game:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return killPlayer;
};