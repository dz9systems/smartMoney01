const express = require('express');
// const {Expo} = require('expo-server-sdk');

const app = express();
// const expo = new Expo();
const PORT = 3000;
// enable CORS without external module
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('GET REQUEST WORKING');
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
