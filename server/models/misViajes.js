module.exports = (sequelize, type) => {

    const MisViajes = sequelize.define("mis_viajes", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

    })

    return MisViajes
}