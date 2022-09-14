///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require('mongoose');

///////////////////////////////
// MODELS
////////////////////////////////
const CreatureSchema = new mongoose.Schema({
        //name: { type: String, required: true },
    name: { type: String, required: true },
    origins: { type: String },
    bio: { type: String }

}, { timestamps: true });

const Creature = mongoose.model("Creature", CreatureSchema);

module.exports = Creature;