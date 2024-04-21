import axios from "axios";

export const useGetVotedPlayers = () => {
  const votedPlayers = async (roomId) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/${roomId}/voted-users`
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return votedPlayers;
};
