const express = require("express");
const itemModel = require('../models/itemsModel')
const router = express.Router()

router.get("/get-all-items", async(req, res) => {
    try {
        const items = await itemModel.find()
        res.send(items)
    } catch (error) {
        res.status(400).json(error)
    }
})  

router.post("/add-item", async(req, res) => {
    try {
        const newItem = new itemModel(req.body)
        await newItem.save()
        res.send('Item Added Successfully')
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}) 

module.exports = router