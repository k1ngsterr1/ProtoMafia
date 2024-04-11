import axios from "axios";

export const useSendFall = () => {
  const sendFall = async (roomId, playerId) => {
    try {
      console.log(roomId, playerId);

      const response = await axios.post(
        `https://showtime.up.railway.app/api/game/warn/${roomId}/user/${playerId}`
      );

      console.log("successfully give fall!", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return sendFall;
};
