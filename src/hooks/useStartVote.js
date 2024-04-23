import axios from "axios";

export const useStartVote = () => {
  const roomId = JSON.parse(localStorage.getItem("roomId"));

  const startVote = async () => {
    try {
      const response = await axios.post(
        `https://showtimeserver-production.up.railway.app/api/game/${roomId}/startVote`
      );
    } catch (error) {
      console.error("There was an error with starting the vote:", error);
    }
  };

  return startVote;
};
