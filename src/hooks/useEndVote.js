import axios from "axios";

export const useEndVote = () => {
  const endVote = async (roomId) => {

    try {
      const response = await axios.post(
        `http://localhost:4200/api/game/end-vote/${roomId}`
      );

      console.log("Data from ending vote", response.data);
    } catch (error) {
      console.error("There was an error with ending votes", error);
    }
  };

  return endVote;
};
