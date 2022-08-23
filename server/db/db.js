const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./asociacionesDeModelos");

/* Traemos los modelos (modelo = tabla) */

const UsuarioModel = require("../models/usuarios");
const ViajeModel = require("../models/viajes");
const PermisoModel = require("../models/permisos");
const ParadaModel = require("../models/paradas");
const MultimediaModel = require("../models/multimedias");
const MisViajesModel = require("../models/misViajes");
const LugarModel = require("../models/lugares");
const EtapaModel = require("../models/etapas");
const EnlaceModel = require("../models/enlaces");
const AnotacionModel = require("../models/anotaciones");


/* Creamos la base de datos
    Parametros de Sequalize: nombre de la bd, usuario, contraseña y un objeto con:
    - host, 
    - dialect (mariadb)
*/
const sequelize = new Sequelize("vibook_data", "lisho", "toor", {
  host: "db",
  dialect: "mariadb",
});

/* Creamos las tablas */

const Usuario = UsuarioModel(sequelize, Sequelize);
const Viaje = ViajeModel(sequelize, Sequelize);
const Permiso = PermisoModel(sequelize, Sequelize);
const Parada = ParadaModel(sequelize, Sequelize);
const Multimedia = MultimediaModel(sequelize, Sequelize);
const MisViajes = MisViajesModel(sequelize, Sequelize);
const Lugar = LugarModel(sequelize, Sequelize);
const Etapa = EtapaModel(sequelize, Sequelize);
const Enlace = EnlaceModel(sequelize, Sequelize);
const Anotacion = AnotacionModel(sequelize, Sequelize);

/* Establecemos las relaciones entre las tablas */

applyExtraSetup(sequelize);

/* Sincronizamos las tablas con la base de datos (y devuelve una promesa)*/

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

/* Exportamos los objetos que vamos a necesitar */

module.exports = {
  sequelize,
  Usuario,
  Viaje,
  Permiso,
  Parada,
  Multimedia,
  MisViajes,
  Lugar,
  Etapa,
  Enlace,
  Anotacion,

};
