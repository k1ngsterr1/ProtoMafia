import { Axios } from "axios";

export const useWinInnocent = () => {
  const winInnocent = async ({ roomId }) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/win-innocent/${roomId}`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return winInnocent;
};
