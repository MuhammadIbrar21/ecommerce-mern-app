const express = require('express')
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')
require('./db/db');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.use('/auth', authRoutes);

app.use('/admin', adminRoutes);

app.listen(port, () => {
    console.log(`Server is connected at port ${port}`);
})