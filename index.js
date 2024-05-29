const express = require('express');
const swaggerSetup = require('./swagger');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

app.use(express.json());

// Use the books router
app.use('/api/books', booksRouter);

// Set up Swagger
swaggerSetup(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
