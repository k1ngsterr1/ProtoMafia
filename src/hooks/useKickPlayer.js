import axios from "axios";

import { socket } from "./socketService";

export const useKickPlayer = () => {
  const kickPlayer = async (roomId, userId) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/disconnect/1/${userId}`
      );

      socket.emit("kickPlayer", { roomId, userId });

      console.log("Data from kick the player from the game:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return kickPlayer;
};
