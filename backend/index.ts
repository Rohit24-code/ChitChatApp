import app from "./src/app";
import { connectDb } from "./src/config/database";
import { createServer } from "http";
import { initializeSocket } from "./src/utils/socket";

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

// initalize socket.io
initializeSocket(httpServer);

connectDb()
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log("Server is running on PORT :-", PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database. Server not started.", error);
    process.exit(1);
  });
