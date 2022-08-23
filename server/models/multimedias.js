module.exports = (sequelize, type) => {
    const Multimedias = sequelize.define("multimedias", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: type.STRING,
            allowNull: false
        },
        tipo: {
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

    return Multimedias
}