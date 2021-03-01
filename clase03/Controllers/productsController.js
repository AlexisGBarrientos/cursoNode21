const Product = require("../Models/Product");

const create = async (req, res) => {
    try {
        const {} = req.body;
        
        res.status(201).json({ message: "Poducto creado" })
    } catch (e) {
        res.sendStatus(500);
    }
};

const all = async(req, res) => {}

const single = async(req, res) => {}

const update = async(req, res) => {}

module.exports = { all, single, create, update };