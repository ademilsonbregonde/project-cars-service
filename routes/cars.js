var express = require('express');
var router = express.Router();

const carros = [
  {
    id: 1,
    nome: 'Oferta 1',
    desc: 'Audi R8',
    foto: '../../../assets/img/car1.jpg'
  },
  {
    id: 2,
    nome: 'Oferta 2',
    desc: 'Mercedez Bens',
    foto: '../../../assets/img/car2.jpg'
  },
  {
    id: 3,
    nome: 'Oferta 3',
    desc: 'Lamborghini',
    foto: '../../../assets/img/car3.jpg'
  },
  {
    id: 4,
    nome: 'Oferta 4',
    desc: 'BMW',
    foto: '../../../assets/img/car4.jpg'
  },

];

/* GET cars listing. */
router.get('/', function (req, res, next) {
  res.json(carros);
});


module.exports = router;
