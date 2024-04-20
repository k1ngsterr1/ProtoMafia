import { Axios } from "axios";

export const useEndGame = () => {
  const endGame = async ({ roomId }) => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/end-game/${roomId}`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return endGame;
};
