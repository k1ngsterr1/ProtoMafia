import axios from "axios";

export const useWakeUpDon = () => {
  const wakeUpDon = async (roomId) => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/wake-up-don`
      );
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return wakeUpDon;
};
