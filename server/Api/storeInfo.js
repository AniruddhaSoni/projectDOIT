const express = require("express");
const router = express.Router();
const userModel = require("../Model/user");



router.post("/", async (req, res) => {

    const { data } = req.body;
    const decodedData = Buffer.from(data, "base64").toString("ascii");
    const finallyData = JSON.parse(decodedData);



    try {
        await userModel.create(finallyData)
        res.status(200).json({ status: "ok", message: "Form Submitted Successfully!" })

    } catch (error) {
        res.status(500).json({ status: "error", message: "validation error or server error, try again!" })

    }

})

module.exports = router;