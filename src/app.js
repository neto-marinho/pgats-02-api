const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const transferRoutes = require('./routes/transferRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/transfers', transferRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
