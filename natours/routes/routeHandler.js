const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`, 'utf-8')
);
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestedAt,
    result: tours.length,
    data: { tours },
  });
};
const createTour = (req, res) => {
  const tourId = tours.length + 1;
  console.log(req.body);
  const toursObj = Object.assign({ id: tourId }, req.body);
  tours.push(toursObj);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours.json`,
    JSON.stringify(tours),
    () => {
      res
        .status(201)
        .json({ status: 'sucess', data: { message: 'saved successfully ' } });
    }
  );
};
const getTour = (req, res) => {
  const paramsId = Number(req.params.id);
  const getTour = tours.find((tour) => {
    return tour.id === paramsId;
  });
  res.status(200).json({ status: 'success', data: { tour: getTour } });
};
const updateTour = (req, res) => {
  const paramsId = Number(req.params.id);
  const getTour = tours.find((tour) => {
    return tour.id === paramsId;
  });
  if (!getTour) {
    return res
      .status(404)
      .json({ status: 'fail', data: { message: 'no tour found' } });
  }
  Object.assign(getTour, req.body);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res
          .status(500)
          .json({ status: 'fail', data: { message: 'failed to update tour' } });
      }
    }
  );
  res.status(200).json({ status: 'sucess', data: { message: 'updated tour' } });
};
const deleteTour = (req, res) => {
  const paramsId = Number(req.params.id);
  const updateTour = tours.filter((tour) => {
    return tour.id !== paramsId;
  });
  if (!updateTour) {
    return res
      .status(404)
      .json({ status: 'fail', data: { message: 'no tour found to delete' } });
  }
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours.json`,
    JSON.stringify(updateTour),
    (err) => {
      if (err) {
        return res
          .status(500)
          .json({ status: 'fail', data: { message: 'failed to delete tour' } });
      }
    }
  );
  res.status(200).json({ status: 'sucess', data: { message: 'deleted tour' } });
};
module.exports = {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
};
