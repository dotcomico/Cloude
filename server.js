const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// "מאגר נתונים" זמני בזיכרון
let cloudTasks = [
    { id: 1, title: "Database Backup", status: "Completed" },
    { id: 2, title: "API Deployment", status: "In Progress" }
];

// לקבלת כל המשימות
app.get('/api/tasks', (req, res) => {
    res.json(cloudTasks);
});

// להוספת משימה חדשה (שירות חדש)
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: cloudTasks.length + 1,
        title: req.body.title,
        status: "Pending"
    };
    cloudTasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));