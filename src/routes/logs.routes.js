const express = require('express');
const router = express.Router();

async function show(req, res) {
	res.send('hello ' + req.params.id);
}

router.get('/callme/:id', show);

module.exports = router;