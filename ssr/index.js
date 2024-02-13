const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const staticFilesDir = path.join(__dirname, 'public');

app.use(express.static(staticFilesDir));

app.get('/example', (req, res)=>{
    res.sendFile(`${staticFilesDir}/about.html`)
})

// start server
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})

