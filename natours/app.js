const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from server side', name: 'natours' });
// });
// app.post('/', (req, res) => {
//   res.status(404).send(`you can't use post on this url`);
// });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, 'utf-8')
);
app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', result: tours.length, data: { tours } });
});
app.post('/api/v1/tours', (req, res) => {
  const tourId = tours.length + 1;
  console.log(req.body);
  const toursObj = Object.assign({ id: tourId }, req.body);
  tours.push(toursObj);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours.json`,
    JSON.stringify(tours),
    () => {
      res
        .status(201)
        .json({ status: 'sucess', data: { message: 'saved successfully ' } });
    }
  );
});
app.listen(3000, () => {
  console.log('Server is listening on 3000');
});
