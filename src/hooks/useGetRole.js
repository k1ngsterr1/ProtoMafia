import axios from "axios";
import { useState } from "react";

export function useGetRole() {
  const [role, setRole] = useState();

  const getRole = async (roomId, userId) => {
    try {
      const response = await axios.get(
        `https://showtimeserver-production.up.railway.app/api/game/get-role/${roomId}/${userId}`
      );

      setRole(response.data.user.gameRole);
      console.log("succesfully get the role of the user:", response.data);
    } catch (error) {
      console.error("There was an error with getting user role:", error);
    }
  };

  return { getRole, role };
}
