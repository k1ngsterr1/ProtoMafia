import axios from "axios";

export const useDetectSheriff = () => {
  const detectSheriff = async (roomId, userId) => {

    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/detect/${roomId}/sheriff/${userId}`
      );

      console.log("Data from detecting the player:", response.data);
    } catch (error) {
      console.error("There was an error with detecting the player:", error);
    }
  };

  return detectSheriff;
};
