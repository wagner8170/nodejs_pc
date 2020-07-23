const express = require('express');
const app = express();
const port = 8080;

const router = require('./routes/logs.routes');

app.use(router);

app.listen(port, () => {
	console.log(`App started on port ${port}`);
})