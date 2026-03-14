const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server side', name: 'natours' });
});
app.post('/', (req, res) => {
  res.status(404).send(`you can't use post on this url`);
});
app.listen(3000, () => {
  console.log('Server is listening on 3000');
});
