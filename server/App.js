const express = require('express')
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const cors = require('cors')
const path = require('path')
require('./db/db');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3040;

app.use(cors())

app.use('/auth', authRoutes);

app.use('/admin', adminRoutes);

// app.use(express.static('./server/build'))

app.use(express.static('./server/productImages'))

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, "build")));
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
})

app.listen(port, () => {
    console.log(`Server is connected at port ${port}`);
})