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
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from server side', name: 'natours' });
// });
// app.post('/', (req, res) => {
//   res.status(404).send(`you can't use post on this url`);
// });
app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);
app.listen(3000, () => {
  console.log('Server is listening on 3000');
});
