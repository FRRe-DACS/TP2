const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

const Pelicula = require('../models/pelicula');


// GET TODAS LAS PELICULAS
router.get('/', async (req,res) =>{
    const peliculas = await Pelicula.find();
    res.json(peliculas);

});


// GET PELICULA SEGUN NOMBRE
router.get('/:name', async (req, res) =>{
	const pelicula = await Pelicula.find({"nombre": { $regex: req.params.name, $options: 'i' }});
	res.json(pelicula);
    
});



// GET PELICULA SEGUN ID
router.get('/actualizar/:id', async (req, res) =>{
	const pelicula = await Pelicula.findById(req.params.id);
	res.json(pelicula);	
	
});

// PUT PELICULA (ACTUALIZAR)
router.put('/:id', async (req, res)=>{
    await Pelicula.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Pelicula Actualizada'
    });
});


// POST PELICULA
router.post("/", async(req, res) =>{
	await Pelicula.create(req.body);
	res.json({
        status: 'Pelicula Actualizada'
    });
	
});


//DELETE PELICULA
router.delete('/:id', async (req, res)=>{
    await Pelicula.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Pelicula eliminada'
    });
});


module.exports = router;