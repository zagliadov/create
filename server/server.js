require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/user', require('./routes/user'));
app.use('/api/private', require('./routes/private'));
app.use('/api/products', require('./routes/products'));


const server = app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1))
})