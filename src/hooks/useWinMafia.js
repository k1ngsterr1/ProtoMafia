import { Axios } from "axios";

export const useWinMafia = () => {
  const winMafia = async ({ roomId }) => {
    try {
      const response = await axios.post(
        `https://showtime.up.railway.app/api/game/win-mafia/${roomId}`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return killPlayer;
};