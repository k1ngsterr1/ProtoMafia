import axios from "axios";
import { useState, useEffect } from "react";

export function useGetPlayers(roomId) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("roomID in useGetPlayers:", 2);

    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `https://showtimeserver-production.up.railway.app/api/rooms/1/users`
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
