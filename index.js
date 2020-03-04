// require depencies
const book = require("./routes/bookcab");
const trips = require("./routes/trips");
const express = require("express");
const app = express();

// middlewares
app.use(express.json());

app.use("/api/book", book);
app.use("/api/trips", trips);

// root get request
app.get("/", (req, res) => {
  res.send("Welcome To On Call Taxi.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}...`));
