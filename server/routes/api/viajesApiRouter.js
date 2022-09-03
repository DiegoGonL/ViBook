const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

const { Viaje, Etapa, Permiso, Usuario } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const todosViajes = await Viaje.findAll( {
        include: [
            { model: Etapa },
            { model: Usuario,
                include: [
                    { model: Permiso,
                        attributes: ['permiso']
                    }
            ]},
        ]
    });
    res.json(todosViajes);
});

router.get('/:id', async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id, {
        include: [
            { model: Etapa },
            { model: Usuario,
                include: [
                    { model: Permiso,
                        attributes: ['permiso']
                    }
            ]},
        ]
    });
    res.json(viaje);
}  );

router.post('/', async (req, res) => {
    const viaje = await Viaje.create(req.body);
    res.json({ message: 'Viaje creado correctamente' });

} );

router.put('/:id', async (req, res) => {
    await Viaje.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha modificado el viaje' });
}   );

router.delete('/:viajeid', async (req, res) => {
    await Viaje.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha eliminado el viaje' });
}   );

module.exports = router;