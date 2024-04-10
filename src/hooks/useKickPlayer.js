import axios from "axios";

export const useKickPlayer = () => {
  const kickPlayer = async (userId) => {
    try {
      const response = await axios.post(
        `https://showtime.up.railway.app/api/game/disconnect/${userId}`
      );

      console.log("Data from kick the player from the game:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return kickPlayer;
};
