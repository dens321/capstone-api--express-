const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const auth = require("./controllers/auth");


// using middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

app.get("/welcome", auth, (req, res) => {
    res.status(200).send(`Welcome! ${req.user.username}`);
})


app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
});

// start server
app.listen(PORT, () => {
    console.log(`it's live on http://localhost:${PORT}`)
})