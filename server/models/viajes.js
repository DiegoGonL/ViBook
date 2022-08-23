module.exports = (sequelize, type) => {

    const Viajes = sequelize.define("viajes", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: type.STRING,
        description: type.STRING,
        foto_portada: type.STRING,

    })

    return Viajes
}