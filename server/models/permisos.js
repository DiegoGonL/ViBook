module.exports = (sequelize, type) => {

    const Permisos = sequelize.define("permisos", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        /* email: type.STRING, */
        permiso: type.STRING,
        description: type.STRING,

    })

    return Permisos
}