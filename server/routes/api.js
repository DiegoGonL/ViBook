const router = require('express').Router();

/** Importamos los archivos de cada ruta */


const viajesApiRouter = require('./api/viajesApiRouter');
/*
const usersApiRouter = require('./api/usersApiRouter');
const tecnicosApiRouter = require('./api/tecnicosApiRouter');
const ceasApiRouter = require('./api/ceasApiRouter');
const tsCeasApiRouter = require('./api/tsCeasApiRouter');
*/

/* Importamos el archivo de middlewares */

const middlewares = require('./middlewares');

/** Redirigimos las rutas */

router.use('/viajes', /*  middlewares.checkToken , */ viajesApiRouter);

module.exports = router;