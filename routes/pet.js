const route = require('express').Router();
// const router = express.Router();

const { petregister } = require('../controllers/pet');
const store = require('../middlewares/multer');

route.post('/petregister', store.array('petimage'), petregister);

module.exports = route;