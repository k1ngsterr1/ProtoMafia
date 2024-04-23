import axios from "axios";

export const useGetChosen = () => {
  const chosenPlayers = async (roomId) => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/chosen`
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return chosenPlayers;
};
