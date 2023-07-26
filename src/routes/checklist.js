const express = require('express');

const router = express.Router();

const Checklist =require('../models/checklist')
const Task =require('../models/task')

router.get('/', (req, res) => {
    console.log('Ola');
    res.send();
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    let { name } = req.body;
    // console.log(name)
    // res.status(200).send(req.body);
    try {
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    // res.status(200).send(name);
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`GET ID: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`PUT ID: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;