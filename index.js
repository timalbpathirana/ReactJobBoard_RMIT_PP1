const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

require('dotenv').config()

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var serviceAccount = require("./configs/huntrrmit-firebase-adminsdk-6p5ck-8bbed5d717.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const port = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to Match making server')
})

app.get('/userDelete', (req, res) => {
    const queryEmail = req.query.email
    admin
        .auth()
        .getUserByEmail(queryEmail)
        .then((userRecord) => {
            res.send(userRecord)
        })
        .catch((error) => {
            console.log('Error fetching user data:', error);
        });

})

app.post('/userDelete', (req, res) => {
    const uid = req.query.uid
    admin
        .auth()
        .deleteUser(uid)
        .then((e) => {
            console.log('Successfully deleted user');
        })
        .catch((error) => {
            console.log('Error deleting user:', error);
            res.send(error)
        });
    
})

app.listen(process.env.PORT || port)