module.exports = (sequelize, type) => {
    const Enlaces = sequelize.define("enlaces", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: type.STRING,
            allowNull: false
        },
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        descripcion: {
            type: type.STRING,
            allowNull: true
        }
    })

    return Enlaces
}