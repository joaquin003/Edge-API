const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.send("Bienvenidos a la app!");
});

//si no existe la ruta, mostramos mensaje de error
app.use((req, res) => {
  if (res) {
    res.status(404).send({ error: "Pagina no encontrada" });
  }
});

app.listen(PORT, () => {
  console.log("Corriendo servidor");
});
