const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

<<<<<<< develop
const { Viaje, Etapa, Permiso, Usuario } = require('../../db/db')
=======
const { Viaje, Etapa, Parada } = require('../../db/db')
>>>>>>> Creada primera rupa de la api para el modelo Viajes

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const todosViajes = await Viaje.findAll( {
<<<<<<< develop
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
=======

>>>>>>> Creada primera rupa de la api para el modelo Viajes
    });
    res.json(todosViajes);
})

router.get('/:id', async (req, res) => {
    const viaje = await Viaje.findOne({
        where: {
            id: req.params.id
        },
<<<<<<< develop
       /* include: {
            Etapa,
            Parada
        } */
=======
        include: {
            Etapa,
            Parada
        }
>>>>>>> Creada primera rupa de la api para el modelo Viajes
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
<<<<<<< develop
        /* include: {
            Etapa,
            Parada
        } */
=======
        include: {
            Etapa,
            Parada
        }
>>>>>>> Creada primera rupa de la api para el modelo Viajes
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
<<<<<<< develop
       /* include: {
            Etapa,
            Parada
        } */
=======
        include: {
            Etapa,
            Parada
        }
>>>>>>> Creada primera rupa de la api para el modelo Viajes
    });
    res.json(viajeActualizado);
})

module.exports = router;