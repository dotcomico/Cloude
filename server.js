const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // מאפשר גישה מהדפדפן
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "Hiiiii" });
});
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the Backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});