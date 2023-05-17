const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 8080;


// using middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/', require('./routes/users'))

app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
});

// start server
app.listen(PORT, () => {
    console.log(`it's live on http://localhost:${PORT}`)
})