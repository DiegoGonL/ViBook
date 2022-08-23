module.exports = (sequelize, type) => {
    const Anotaciones = sequelize.define("anotaciones", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: type.STRING,
            allowNull: false
        },
        texto: {
            type: type.STRING,
            allowNull: false
        }
    })
    return Anotaciones
}