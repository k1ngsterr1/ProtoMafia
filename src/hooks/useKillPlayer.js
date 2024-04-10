import { axios } from "axios";

export const useKillPlayer = () => {
  const killPlayer = async ({ playerId }) => {
    try {
      const response = await axios.post(
        `https://showtime.up.railway.app/api/game/kill/${playerId}`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return killPlayer;
};
