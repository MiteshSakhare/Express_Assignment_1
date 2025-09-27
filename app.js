const express = require('express');
const app = express();
const PORT = 3000;

const students = [
  { name: "Aarav Mehta", rollNo: "101", course: "ExpressJS", batch: "10-12 AM" },
  { name: "Riya Sharma", rollNo: "102", course: "MongoDB", batch: "12-3 PM" },
  { name: "Rohit Patil", rollNo: "103", course: "NodeJS", batch: "2:30-4:30 PM" },
  { name: "Neha Kulkarni", rollNo: "104", course: "EJS", batch: "5-6 PM" }
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

app.get('/students', (req, res) => {
  res.render('pages/students', { title: 'Students', students });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
