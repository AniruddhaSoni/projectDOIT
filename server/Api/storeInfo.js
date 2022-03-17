const express = require("express");
const router = express.Router();



router.post("/", async (req, res) => {


    res.status.json({ status: "ok", message: "Hello" })
})

module.exports = router;