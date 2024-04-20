import axios from "axios";
import { useState, useEffect } from "react";

export function useGetPlayers(roomId) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("roomID in useGetPlayers:", 2);

    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4200/api/rooms/${roomId}/users`
        );
        console.log("zhopa:", response.data);
        setPlayers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    // if (roomId) {
    fetchPlayers();
    // }
  }, [roomId]);

  return { players };
}
