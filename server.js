const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use('*/css', express.static('public/assets/css'));
app.use('*/js', express.static('public/assets/js'));
app.use('*/images', express.static('public/assets/images'));
app.use('*/documents', express.static('public/assets/documents'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
