
# Edge-API

Proyecto creado en nodeJS con Express, utilizando JSONplaceholder




## Implemente Localmente

Clonar el proyecto

```bash
  git clone https://github.com/joaquin003/Edge-API.git
```

Ve al directorio del proyecto

```bash
  cd edge-api
```

Instala las dependencias

```bash
  npm install express axios
```

Inicia el servidor

```bash
  npm run start
```


## Referencias de la API

#### Obtener todos los usuarios

```http
  GET /usuarios
```

#### Obtener usuario por id

```http
  GET /usuarios/:idUsuario
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idUsuario`      | `string` | **Requerido**. Id de usuario para buscar |

#### Paginación de usuarios

```http
  GET /usuarios?pag=1
```


## Autores

- [@joaquin003](https://www.github.com/joaquin003)

