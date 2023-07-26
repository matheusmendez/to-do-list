const express = require('express');

const router = express.Router();

const Checklist =require('../models/checklist')
const Task =require('../models/task')

router.get('/', async (req, res) => {
    // console.log('Ola');
    // res.send();
    try {
        let checklists = await Checklist.find({});
        res.status(200).json(checklists);
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    let { name } = req.body;
    // console.log(name)
    // res.status(200).send(req.body);
    try {
        let checklist = await Checklist.create({ name });
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    // res.status(200).send(name);
});

router.get('/:id', async (req, res) => {
    // console.log(req.params.id);
    // res.status(200).send(`GET ID: ${req.params.id}`);
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(500).json(error)
    }
});

router.put('/:id', async (req, res) => {
    // console.log(req.params.id);
    // res.status(200).send(`PUT ID: ${req.params.id}`);
    let { name } = req.body;

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;