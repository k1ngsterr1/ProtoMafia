import axios from "axios";

import { socket } from "./socketService";

export const useChoosePlayer = () => {
  const choosePlayer = async (roomId, userId) => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/choose/${userId}`
      );

      console.log("Data from kick the player from the game:", response.data);
    } catch (error) {
      console.error("There was an error with kicking from the game:", error);
    }
  };

  return choosePlayer;
};
