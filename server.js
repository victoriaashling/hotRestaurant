const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let waitingList = [];

let tables = [
 {
   name: "frank",
   phoneNum: "123-4567",
   email: "frank@gmail.com",
   id: 900
 },
 {
   name: "Zarr",
   phoneNum: "234-4567",
   email: "zarr@gmail.com",
   id: 1900
 },
 {
   name: "may",
   phoneNum: "345-4567",
   email: "may@gmail.com",
   id: 800
 }
];


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
    return response.json(tables);
});

app.post("/api/tables", (request, response) => {
    let newTable = request.body;
    tables.push(newTable);

    // response.json(newTable);
    response.sendFile(path.join(__dirname, "add.html"));
});

// adding a line




app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});