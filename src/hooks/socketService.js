import { io } from "socket.io-client";
const userData = localStorage.getItem("userData");
const roomId = localStorage.getItem("roomId");
const userDataParse = JSON.parse(userData);
const roomIdParse = JSON.parse(roomId);

export const socket = io("http://localhost:4200", {
  path: "/sockets/",
  query: {
    userId: userDataParse?.id,
    videoRoomId: roomIdParse,
  },
  transports: ["polling", "websocket"],
  reconnectionAttempts: 50000,
  reconnectionDelay: 2000,
});
