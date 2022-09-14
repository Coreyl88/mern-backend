const express = require('express');
const router = express.Router();
const { Creature } = require('../models');
///////////////////////////////
// ROUTES
////////////////////////////////

// Index Route
router.get('/', async (req, res) => {
    try {
        res.status(200).json(await Creature.find());
    } catch (err) {
        res.status(400).json(err);
    }
})

// Create Route
router.post('/', async (req, res) => {
    try {
        res.status(201).json(await Creature.create(req.body));
    } catch (err) {
        res.status(400).json(err);
    }
});

// Show route
router.get("/:id", async (req, res) => {
    try {
        // send one person
        res.json(await Creature.findById(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Creature.findByIdAndUpdate(req.params.id, req.body, {new:true}));
    } catch (err) {
        res.status(400).json(err);
    }
})

// Delete route
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Creature.findByIdAndRemove(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router