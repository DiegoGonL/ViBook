function applyExtraSetup(sequelize) {
  console.log(sequelize.models);
  const {
      anotaciones,
      enlaces,
      etapas,
      lugares,
      misViajes,
      multimedias,
      paradas,
      permisos,
      usuarios,
      viajes,
  } = sequelize.models;

    usuarios.hasMany(viajes, { foreignKey: 'usuarioId', through: misViajes });
    viajes.belongsTo(usuarios, { foreignKey: 'usuarioId', through: misViajes });
    usuarios.hasMany(permisos, { foreignKey: 'usuarioId', through: misViajes });
    permisos.belongsTo(usuarios, { foreignKey: 'usuarioId', through: misViajes });
    viajes.hasMany(permisos, { foreignKey: 'viajeId', through: misViajes });
    permisos.belongsTo(viajes, { foreignKey: 'viajeId', through: misViajes });

    viajes.hasMany(etapas, { foreignKey: 'viajeId' });
    etapas.belongsTo(viajes, { foreignKey: 'viajeId' });

    etapas.hasMany(paradas, { foreignKey: 'etapaId' });
    paradas.belongsTo(etapas, { foreignKey: 'etapaId' });

    paradas.hasMany(enlaces, { foreignKey: 'paradaId' });
    enlaces.belongsTo(paradas, { foreignKey: 'paradaId' });

    paradas.hasMany(anotaciones, { foreignKey: 'paradaId' });
    anotaciones.belongsTo(paradas, { foreignKey: 'paradaId' });

    paradas.hasMany(multimedias, { foreignKey: 'paradaId' });
    multimedias.belongsTo(paradas, { foreignKey: 'paradaId' });

    lugares.hasMany(paradas, { foreignKey: 'paradaId' });
    paradas.belongsTo(lugares, { foreignKey: 'paradaId' });

  // tecnico.hasMany(user, { onDelete: 'CASCADE', hooks: true  });

}

module.exports = { applyExtraSetup };
