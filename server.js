// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// API consts

const tables = [];
const waitlist = [];

let availableTables = 5;

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

// API Routes
app.get("/api/waitlist", function(req, res) {
  return res.json(characters);
});

app.get("/api/reservations", function(req, res) {
  return res.json(tables);
});

app.post("/api/reservations", function(req, res) {
  const request = req.body;
  handleReservation(request);
  res.json(true);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Restaurant listening on PORT " + PORT);
});


// Functions
function handleReservation(reservation) {
  if (availableTables > 0 ) {
    tables.push(reservation);
    availableTables--;
  } else {
    waitlist.push(reservation);
  }
}