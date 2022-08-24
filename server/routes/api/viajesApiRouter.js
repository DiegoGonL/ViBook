const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

const { Viaje, Etapa, Permiso, Usuario } = require('../../db/db')

const { Viaje, Etapa, Parada } = require('../../db/db')

const { Viaje, Etapa, Parada } = require('../../db/db')

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

       /* include: {
            Etapa,
            Parada
        } */

    });
    res.json(todosViajes);
})

router.get('/:id', async (req, res) => {
    const viaje = await Viaje.findOne({
        where: {
            id: req.params.id
        },

       /* include: {
            Etapa,
            Parada
        } */

        include: {
            Etapa,
            Parada
        }

    });
    res.json(viaje);
})

router.post('/', async (req, res) => {
    const viaje = await Viaje.create(req.body);
    res.json(viaje);
})

router.put('/:id', async (req, res) => {
    await Viaje.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    /* devolver los datos actualizados */

    /*  const viajeActualizado = await Viaje.findByPk(req.body.id); */

    const viajeActualizado = await Viaje.findOne({
        where: {
            id: req.params.id
        },

        /* include: {
            Etapa,
            Parada
        } */

        include: {
            Etapa,
            Parada
        }

    });
    res.json(viajeActualizado);
})

router.delete('/:id', async (req, res) => {
    await Viaje.destroy({
        where: {
            id: req.params.id
        }
    });

    /* devolver los datos actualizados */

    const viajeActualizado = await Viaje.findAll({

       /* include: {
            Etapa,
            Parada
        } */

        include: {
            Etapa,
            Parada
        }

    });
    res.json(viajeActualizado);
})

module.exports = router;