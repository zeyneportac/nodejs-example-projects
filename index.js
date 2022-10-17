require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
    console.log("Middleware start..");
    next();
};

app.use(middleware);

app.get('/', function (req, res) {
    res.send('örnek');
});
app.get('/hello', function (req, res) {
    res.send('Merhaba, GET isteği attınız!');
});
app.post('/hello', middleware, function (req, res) {
    console.log("Post iseği için istek gönderildi");
    res.send('Merhaba, POST isteği attınız!')
});
app.put('/hello', function (req, res) {
    res.send('Merhaba, PUT isteği attınız')
});
app.delete('/hello', function (req, res) {
    res.send('Merhaba, DELETE isteği attınız')
});
app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT);
});