const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json()); //can now JSON objects from client request
app.use(express.urlencoded({extended: true})); //can now read JSON objects with strings and arrays 
app.use(
    cors({
        //allows different ports to send requests to API
        origin: "http://localhost:3000",
    }),
);

require("./config/mongoose.config");
require("./routes/author.routes")(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));