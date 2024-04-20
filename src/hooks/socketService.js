import { io } from "socket.io-client";
const userData = localStorage.getItem("userData");
const userDataParse = JSON.parse(userData);

export const socket = io("https://showtimeserver-production.up.railway.app", {
  path: "/sockets/",
  query: {
    userId: userDataParse?.id,
    videoRoomId: 1,
  },
  transports: ["polling", "websocket"],
  reconnectionAttempts: 50000,
  reconnectionDelay: 2000,
});
