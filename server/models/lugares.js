module.exports = (sequelize, type) => {
    const Lugares = sequelize.define("lugares", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        descripcion: {
            type: type.STRING,
            allowNull: true
        },
        direccion: {
            type: type.STRING,
            allowNull: true
        },
        cp: {
            type: type.STRING,
            allowNull: true
        },
        ciudad: {
            type: type.STRING,
            allowNull: true
        },
        latitud: {
            type: type.STRING,
            allowNull: true
        },
        longitud: {
            type: type.STRING,
            allowNull: true
        },

    })
    return Lugares
}