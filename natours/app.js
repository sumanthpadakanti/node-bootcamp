const express = require('express');
const toursRoute = require('./routes/tourRouter');
const usersRoute = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});
app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/users', usersRoute);
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from server side', name: 'natours' });
// });
// app.post('/', (req, res) => {
//   res.status(404).send(`you can't use post on this url`);
// });
module.exports = app;
