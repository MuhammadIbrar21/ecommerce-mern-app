const express = require('express')
const authRoutes = require('./routes/auth')
require('./db/db');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is connected at port ${port}`);
})