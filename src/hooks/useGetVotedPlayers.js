import axios from "axios";
import { useEffect, useState } from "react";

export const useGetVotedPlayers = (roomId) => {
  const [votedPlayersList, setVotedPlayersList] = useState([]);

  useEffect(() => {
    const votedPlayers = async () => {
      try {
        const response = await axios.get(
          `https://showtimeserver-production.up.railway.app/api/game/${roomId}/voted-users`
        );
        console.log(response.data, "there is data from voted players");
        setVotedPlayersList(response.data.users);
      } catch (error) {
        console.error("There was an error with getting voted players:", error);
      }
    };

    votedPlayers();
  }, [roomId]);

  return { votedPlayersList };
};
