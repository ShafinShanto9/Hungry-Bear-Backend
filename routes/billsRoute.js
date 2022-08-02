const express = require('express')
const billsModel = require('../models/billsModel')
const router = express.Router()

router.post("/charge-bill", async(req, res) => {
    try {
        const newBill = new billsModel(req.body)
        await newBill.save()
        res.send('Bill charged successfully')
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
})

module.exports = router
