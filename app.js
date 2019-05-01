"use strict"

// Dependency of express framework
const express = require("express")

// Initialize express framework
const app = express()

// Listening port
const port = 3050

// Route and content definition
app.get("/", (req, res) => res.send("Hello World!"))

// Starting server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
