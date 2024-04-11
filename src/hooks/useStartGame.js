import { axios } from "axios";

export const useStartGame = () => {
  const startGame = async ({ roomId }) => {
    try {
      const response = await axios.post(
        `https://showtime.up.railway.app/api/game/start-game/${roomId}`
      );

      console.log("Data from starting the game:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startGame;
};
