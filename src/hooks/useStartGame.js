import axios from "axios";

export const useStartGame = () => {
  const startGame = async ({ roomId }) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/start-game/1`
      );

      console.log("Data from starting the game:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startGame;
};
