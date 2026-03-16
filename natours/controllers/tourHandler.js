const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);
const checkId = (req, res, next, val) => {
  if (req.params.id > tours.length) {
    return res
      .status(404)
      .json({ status: 'fail', data: { message: 'Invalid ID' } });
  }
  next();
};
const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      data: { message: 'name or price is missing in the request' },
    });
  }
  next();
};
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
    `${__dirname}/../dev-data/data/tours-simple.json`,
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
  Object.assign(getTour, req.body);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
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
  const deleteTour = tours.findIndex((tour) => {
    return tour.id == paramsId;
  });
  tours.splice(deleteTour, 1);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
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
  checkId,
  checkBody,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
};
