const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log("Corriendo servidor");
});
