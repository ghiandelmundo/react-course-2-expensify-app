const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// match all unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); 

// express listens to port 3000
app.listen(port, () => {
    console.log('Server is up in: ', port);
});