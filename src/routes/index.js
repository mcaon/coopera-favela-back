import cors from 'cors';
import express, { request, response } from 'express';
import router from './personRoute'
import path from 'path'

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(3333);

router.get('/', function (req, res, next) {
  res.status(200).send({
    title: "Node Express API",
    version: "0.0.1"
  });
});

module.exports = router;
