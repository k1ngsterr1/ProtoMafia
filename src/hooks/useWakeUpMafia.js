import axios from "axios";

export const useWakeUpMafia = () => {
  const wakeUpMafia = async (roomId) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/${roomId}/wake-up-mafia`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return wakeUpMafia;
};
