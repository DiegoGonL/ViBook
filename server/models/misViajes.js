module.exports = (sequelize, type) => {

    const misViajes = sequelize.define("mis_viajes", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

    })

    return misViajes
}