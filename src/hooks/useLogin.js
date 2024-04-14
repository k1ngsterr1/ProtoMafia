import axios from "axios";

export const useLogin = () => {
  const login = async (loginData) => {
    try {
      console.log("login data is here:", loginData);

      const response = await axios.post(
        "http://localhost:4200/api/auth/login",
        loginData
      );

      const data = response.data.user;
      const tokenData = response.data;

      const userData = {
        id: data.id,
        username: data.username,
        email: data.email,
        role: data.role,
        rank: data.currentRank,
        balance: data.balance,
        refresh: tokenData.refreshToken,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("roomId", JSON.stringify(loginData.roomId));

      window.location.href = "/";
    } catch (error) {
      console.error("There was an error with starting the game:", error);
    }
  };

  return login;
};
