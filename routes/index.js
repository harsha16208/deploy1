const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>[
    res.end("welcme to hosting...!!!")
])

module.exports = router