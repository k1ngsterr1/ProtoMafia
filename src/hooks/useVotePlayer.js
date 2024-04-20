import axios from "axios";

export const useVotePlayer = () => {
  const votePlayer = async (roomId, playerId) => {
    try {
      console.log(roomId, playerId);

      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/vote/${roomId}/user/${playerId}`
      );

      console.log("voted succesfully!", response.data);
    } catch (error) {
      console.error("There was an error with voting in the game:", error);
    }
  };

  return votePlayer;
};
