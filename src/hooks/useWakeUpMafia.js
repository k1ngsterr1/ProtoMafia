import axios from "axios";

export const useWakeUpMafia = () => {
  const wakeUpMafia = async () => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/1/wake-up-mafia`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return wakeUpMafia;
};
