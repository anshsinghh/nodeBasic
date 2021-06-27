const express = require('express');
const db = require('../settings/db');

const app = express();

app.use(express.json());

app.post('/signup', (req, res,)=> {
    if(req.body.email === '') {
        return res.status(400).json({error: "Email cannot be empty"});
    }
    const sql = 'INSERT INTO User SET ?';
    const error = false;
    db.query(sql, req.body, err => {
        if(err) {
            console.log(err);
        }
    })
    delete req.body.password;
    return res.status(201).json(req.body);
})


app.listen(5000, () => {
    console.log("Server is listening at port 5000");
})
