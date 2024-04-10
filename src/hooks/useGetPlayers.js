import axios from "axios";
import { useState, useEffect } from "react";

export function useGetPlayers(roomId) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("roomID in useGetPlayers:", roomId);

    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `https://showtime.up.railway.app/api/rooms/${roomId}/users`
        );
        setPlayers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    if (roomId) {
      fetchPlayers();
    }
  }, [roomId]);

  return { players };
}
