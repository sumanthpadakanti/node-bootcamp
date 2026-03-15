const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require('./routes/routeHandler');

const app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from server side', name: 'natours' });
// });
// app.post('/', (req, res) => {
//   res.status(404).send(`you can't use post on this url`);
// });

app.get('/api/v1/tours', getAllTours);
app.post('/api/v1/tours', createTour);
app.get('/api/v1/tours/:id', getTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);
app.listen(3000, () => {
  console.log('Server is listening on 3000');
});
