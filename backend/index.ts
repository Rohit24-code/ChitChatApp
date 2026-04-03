import app from "./src/app";
import { connectDb } from "./src/config/database";

const PORT = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on PORT :-", PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database. Server not started.", error);
    process.exit(1);
  });
