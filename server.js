const express = require('express');

// Import the routes from index.js
const indexRouter = require('./index');

// Create the web application
const app = express();

// Make the routes in index.js available to the app
app.use('/', indexRouter);

// Start server running
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
