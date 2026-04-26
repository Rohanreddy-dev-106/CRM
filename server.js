import server from "./index.js";
import { MongoDBconnection } from "./src/config/mondodb.config.js";
const PORT = process.env.PORT;
server.listen(PORT, () => {
    MongoDBconnection();
    console.log(`Server is Up and Running at PORT ${PORT}`);
})