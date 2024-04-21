import axios from "axios";

import { socket } from "./socketService";

export const useKickPlayer = () => {
  const kickPlayer = async (roomId, userId) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/disconnect/${roomId}/${userId}`
      );

      console.log("Data from kick the player from the game:", response.data);
    } catch (error) {
      console.error("There was an error with kicking from the game:", error);
    }
  };

  return kickPlayer;
};
