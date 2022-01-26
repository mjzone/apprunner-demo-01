const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.send("Hello from Enlear Academy!");
});

app.get("/health", (req,res) => {
    res.status(200).send("healthy");
});

app.listen(3000, () => {
    console.log("App is running...");
});
