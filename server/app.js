var express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

/** Importamos las rutas de la api */

const apiRouter = require("./routes/api");

/** Iniciamos el servidor de express */
var app = express();

const port = process.env.PORT || 3030;

/* sincronizamos la base de datos con los modelos */

require("./db/db")

//-->  Configuración de cors


const allowlist = ["http://0.0.0.0:4000",
    "http://0.0.0.0:13030",
    "http://0.0.0.0:13003",
    "http://192.168.31.192:4000",
    'http://localhost:3000',
    'http://192.168.0.115:3000'];

const corsOptionsDelegate = function (req, callback) {
    console.log("probando cors");
    var corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

//--> END configuración de cors


/*
app.use(logger('dev'));
app.use(cookieParser()); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//--> Redireccionamos las rutas que vengan a api

app.use("/api", apiRouter);


/** Arrancamos el servidor */
app.listen(port, () => {
    console.log("Server funcionando en el puerto", port);
});



 module.exports = app;
