import axios from "axios";

export function useGetRole() {
  const getRole = async (roomId, userId) => {
    try {
      const response = await axios.get(
        `https://showtime.up.railway.app/api/game/get-role/${roomId}/${userId}`
      );

      console.log("succesfully get the role of the user:", response.data);
    } catch (error) {
      console.error("There was an error with getting user role:", error);
    }
  };

  return getRole;
}
