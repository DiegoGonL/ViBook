module.exports = (sequelize, type) => {

    const Paradas = sequelize.define("paradas", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: type.STRING,
        description: type.STRING

    })

    return Paradas
}