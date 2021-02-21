const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send("Probando clase 02");
})

module.exports = router;
