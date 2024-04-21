import axios from "axios";
import { useState } from "react";

export function useCheckRole() {
  const [role, setRole] = useState();

  const checkRole = async (roomId, userId, targetRole) => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/check-role/${roomId}/${userId}`,
        {
          targetRole: targetRole,
        }
      );

      setRole(response.data.user.gameRole);
      console.log("succesfully get the role of the user:", response.data);
    } catch (error) {
      console.error("There was an error with getting user role:", error);
    }
  };

  return { checkRole, role };
}
