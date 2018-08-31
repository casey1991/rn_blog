import io from "socket.io-client";
const socket = io("http://localhost:3000/CHAT", {
  query: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTUzNTM1MTkxMiwiZXhwIjoxNTM1MzU1NTEyfQ.FHevEa83MdBfElBs-5e6DNzGXkcpGe453DwVA9ay8FQ"
  }
});
console.log(socket);
