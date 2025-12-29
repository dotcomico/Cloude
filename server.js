const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is UP!");
});

app.get('/api/data', (req, res) => {
    res.json({ message: "Welcome to Cloude! ☁️" });
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});