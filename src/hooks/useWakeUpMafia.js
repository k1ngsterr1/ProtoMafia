import axios from "axios";

export const useWakeUpMafia = () => {
  const wakeUpMafia = async () => {
    const roomId = JSON.parse(localStorage.getItem("roomId"));

    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/wake-up-mafia``https://showtimeserver-production.up.railway.app/api/game/${roomId}/wake-up-mafia`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return wakeUpMafia;
};
