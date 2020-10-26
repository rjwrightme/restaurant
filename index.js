// pseudo code: three pages

// set up a home page
// create a reservation form
// Reservation list containing those tables that have been reserved
// data/variable that hold the information for table reservations: read/Write file (so it can be updated as we go)
// API in jQuery at the front end - jQuery sends a post to the server and the server then handles it to read and write
// index.html and bootstrap the hell out of it!
// route - to load the HTML - render HTML pages (3) - homepage (index.html), current tables, reservation
// API Routes - Reservations, current reservation will load when called upon  (GET, POST) - /api/get-tables - /api/reserve

const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)
const tables = [];

// HTML
app.get("/");
app.get("/current-tables");
app.get("/reservations");
// API
app.get("/api/waitlist");
app.get("/api/get-tables");
app.get("/api/reserve");
