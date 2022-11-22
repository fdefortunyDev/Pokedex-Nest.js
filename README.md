<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. Clonar el repositorio
```
https://github.com/fdefortunyDev/Pokedex-Nest.js.git
```

2. Ejecutar
```
yarn install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo ```.env.template```, renombrar la copia a ```.env```
y llenar las variables de entorno definidas en el ```.env``` 

6. Levantar la aplicación
```
yarn start:dev
```

7. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack utilizado
* MongoDB
* Nest JS
