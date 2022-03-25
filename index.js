const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.send("Bienvenidos a la app!");
});

app.get("/usuarios", (req, res) => {
  const { pag } = req.query;

  //si agregamos el parametro ?pag a url
  if (pag) {
    if (pag == "1") {
      axios
        .get("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5")
        .then((response) => {
          res.status(200).send({ usuarios: response.data });
        });
    } else if (pag == "2") {
      axios
        .get("https://jsonplaceholder.typicode.com/users?_start=5&_limit=5")
        .then((response) => {
          res.status(200).send({ usuarios: response.data });
        });
    } else {
      res.status(404).send({ error: "Ya no hay más usuarios que mostrar" });
    }
  } else {
    //si no hay el parametro, se trae a todos los usuarios de manera ascendente
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      res.status(200).send({ usuarios: response.data });
    });
  }
});

//buscamos a usuario por su id
app.get("/usuarios/:idUsuario", (req, res) => {
  let idUsuario = req.params.idUsuario;

  axios
    .get(`https://jsonplaceholder.typicode.com/users?id=${idUsuario}`)
    .then((response) => {
      if (response.data.length > 0) {
        res.status(200).send({ usuario: response.data });
      } else {
        res.status(404).send({ error: "No existe usuario" });
      }
    });
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
