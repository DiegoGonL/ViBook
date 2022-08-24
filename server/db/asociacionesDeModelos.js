function applyExtraSetup(sequelize) {
  console.log(sequelize.models);
  const {
      anotaciones,
      enlaces,
      etapas,
      lugares,
      mis_viajes,
      multimedias,
      paradas,
      permisos,
      usuarios,
      viajes,
  } = sequelize.models;

    /*usuarios.hasMany(viajes, { foreignKey: 'usuarioId', through: 'mis_viajes' });
    viajes.belongsTo(usuarios, { foreignKey: 'usuarioId', through: 'mis_viajes' });
    usuarios.hasMany(permisos, { foreignKey: 'usuarioId', through: 'mis_viajes' });
    permisos.belongsTo(usuarios, { foreignKey: 'usuarioId', through: 'mis_viajes' });
    viajes.hasMany(permisos, { foreignKey: 'viajeId', through: 'mis_viajes' });
    permisos.belongsTo(viajes, { foreignKey: 'viajeId', through: 'mis_viajes' });*/

    viajes.belongsToMany(usuarios, { through: mis_viajes});
    usuarios.belongsToMany(viajes, { through: mis_viajes });

    viajes.belongsToMany(permisos, { through: mis_viajes });
    permisos.belongsToMany(viajes, { through: mis_viajes });

    permisos.belongsToMany(usuarios, { through: mis_viajes });
    usuarios.belongsToMany(permisos, { through: mis_viajes });

    viajes.hasMany(etapas);
    etapas.belongsTo(viajes);

    etapas.hasMany(paradas);
    paradas.belongsTo(etapas);

    paradas.hasMany(enlaces);
    enlaces.belongsTo(paradas);

    paradas.hasMany(anotaciones);
    anotaciones.belongsTo(paradas);

    paradas.hasMany(multimedias);
    multimedias.belongsTo(paradas);

    lugares.hasMany(paradas);
    paradas.belongsTo(lugares);

  // tecnico.hasMany(user, { onDelete: 'CASCADE', hooks: true  });

}

module.exports = { applyExtraSetup };
