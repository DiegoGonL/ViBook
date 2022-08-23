module.exports = (sequelize, type) => {

    const Usuarios = sequelize.define("usuarios", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        email: type.STRING,
        username: type.STRING,
        password: type.STRING,
        avatar: type.STRING,
        rol: type.STRING,

    })

    return Usuarios
}