import axios from "axios";

export const useStartDay = () => {
  const startDay = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/1/startDay`
      );

      console.log("Data from the night:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startDay;
};
