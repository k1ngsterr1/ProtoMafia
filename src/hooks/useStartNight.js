import axios from "axios";

export const useStartNight = () => {
  const startNight = async () => {
    // console.log("room id is here:", roomId);

    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/1/startNight`
      );

      console.log("Data from the night:", response.data);
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return startNight;
};
