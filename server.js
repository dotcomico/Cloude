const express = require('express');
const cors = require('cors'); // חובה לייבא את cors
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // חובה להשתמש בזה כדי שה-Frontend יוכל לגשת לשרת
app.use(express.json());

// וודא שהנתיב הוא בדיוק /api/data
app.get('/api/data', (req, res) => {
    res.json({ message: "Welcome to Cloude! ☁️" });
});

app.listen(PORT, () => {
    console.log(`Server is running`);
});