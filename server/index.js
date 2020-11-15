const express = require('express');
// const controller = require('./controller');
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/dist'));

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening at http://localhost:${port}`);
});
