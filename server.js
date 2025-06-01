const express = require('express');
const app = express();
const path = require('path');
const rentalsRoute = require('./routes/rentals');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/rentals', rentalsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
