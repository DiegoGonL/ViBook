var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

/** Importamos las rutas de la api */

/* const apiRouter = require("./routes/api"); */

/** Iniciamos el servidor de express */
var app = express();

const port = process.env.PORT || 3030;


app.use(logger('dev'));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//--> Redireccionamos las rutas que vengan a api

/* app.use("/api", apiRouter); */


/** Arrancamos el servidor */
app.listen(port, () => {
    console.log("Server funcionando en el puerto", port);
});


module.exports = app;

