module.exports = (sequelize, type) => {

    const Etapas = sequelize.define("etapas", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: type.STRING,
        description: type.STRING,
        foto_portada: type.STRING,
        foto_miniatura: type.STRING,
        fecha_inicio: type.DATE,
        fecha_fin: type.DATE,
        origen: type.STRING,
        destino: type.STRING,
        
    })

    return Etapas
}