import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./config/database.config.js";
import app from "./app.js";

connectDB().then(() => {
    app.listen(4000, () => {
        console.log(`Server is running`);
    })
});