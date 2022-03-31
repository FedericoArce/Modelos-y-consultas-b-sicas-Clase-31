const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

//Ruta GET "Lista de actores."
router.get('/actors', actorsController.list);

//Ruta GET "Detalle de actores."
router.get('/actors/detail/:id', actorsController.detail);

//Ruta GET "Actores por rating (primeros 5)."
router.get('/actors/topFive', actorsController.best);

//Ruta GET "Creación de actores"
router.get('/actors/create', actorsController.add);

//Ruta POST "Recibe los datos del formulario anterior y escribe la información en la base de datos."
router.post('/actors/create', actorsController.create);

//Ruta GET "Formulario para edición de información"
router.get('/actors/edit/:id', actorsController.edit);

//Ruta PUT "Recibe información del formulario anterior y la actualiza segun el ID ingresado por URL."
router.put('/actors/edit/:id', actorsController.update);

//Ruta DELETE "Elimina el registro del ID ingresado por URL."
router.delete('/actors/delete/:id ', actorsController.destroy);




module.exports = router;