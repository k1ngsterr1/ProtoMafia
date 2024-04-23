import axios from "axios";
import { useEffect, useState } from "react";

export const useGetChosen = (roomId) => {
  const [chosenPlayersList, setChosenPlayersList] = useState([]);

  const getChosenPlayers = async () => {
    try {
      const response = await axios.get(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/chosen`
      );
      console.log("get chosen players:", response.data.users);
      setChosenPlayersList(response.data.users);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };
  // getChosenPlayers();

  return { chosenPlayersList, getChosenPlayers };
};
