const express = require("express");
const bodyParser = require("body-parse");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", (request, response) => {
    response.sendFile(path.join(__dirname, "table.html"));
});

app.get("/add", (request, response) => {
    response.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/tables", (request, response) => {
    
});




app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});