const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/* Models Import */
const User = require('./models/Users')

/* Middleware */
app.use(cors());
app.use(express.json());

/* Database Connection */
mongoose.connect('mongodb+srv://jayakrishna:root@placements-crud.5yih5.mongodb.net/placements?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

{/* Verify User Token */}


/* User Auth - Login */
app.post('/userAuth', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        pwd: req.body.pwd,
    })

    if(user) {
        const token = jwt.sign({
            name: user.name,
            pwd: user.pwd
        }, 'secretToken')

        console.log(user.email, user.pwd, user.admin);

        return res.json( {'isAdmin':user.admin, user:true});
    }   
    else {
        return res.json( {Status: 'error', user:false} )
    }
});

/* port */
app.listen(3001, () => {
    console.log('Server running at port:3001');
});