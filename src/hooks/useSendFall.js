import axios from "axios";

export const useSendFall = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const refreshToken = userData.refresh;

  const sendFall = async (roomId, playerId) => {
    try {
      console.log(roomId, playerId);

      const response = await axios.post(
        `http://localhost:4200/api/game/warn/${roomId}/user/${playerId}`,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      console.log("successfully give fall!", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return sendFall;
};
