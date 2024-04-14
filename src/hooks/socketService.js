import { io } from "socket.io-client";
const userData = localStorage.getItem("userData");
const userDataParse = JSON.parse(userData);

console.log(userData);

export const socket = io("http://localhost:4200", {
  path: "/sockets/",
  query: {
    userId: userDataParse.id,
    videoRoomId: 1,
  },
  transports: ["polling", "websocket"],
  reconnectionAttempts: 50000,
  reconnectionDelay: 2000,
});
