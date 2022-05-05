import express from 'express';
import cors from 'cors';

// If you're using one of our datasets, uncomment the appropriate import below
// to get started!
// import avocadoSalesData from "./data/avocado-sales.json";
// import booksData from "./data/books.json";
// import goldenGlobesData from "./data/golden-globes.json";
// import netflixData from "./data/netflix-titles.json";
// import topMusicData from "./data/top-music.json";
import drivers from './data/drivers-csv.json';

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello Technigo!');
});

// all the drivers
// http://localhost:8080/drivers
app.get('/drivers', (req, res) => {
  res.status(200).json(drivers);
  res.send(drivers);
  // console.log(drivers);
});

// specific driver
// ex: http://localhost:8080/drivers/1
app.get('/drivers/:driverId', (req, res) => {
  // console.log(req.params);

  const driverById = drivers.find(
    (driver) => driver.driverId === +req.params.driverId
  );

  res.status(200).json(driverById);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
