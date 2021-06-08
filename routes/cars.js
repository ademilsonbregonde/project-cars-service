var express = require('express');
var router = express.Router();

const carros = [
  {
    id: 1,
    nome: 'Oferta 1',
    desc: '',
    foto: '../../../assets/img/car1.jpg'
  },
  {
    id: 2,
    nome: 'Oferta 2',
    desc: '',
    foto: '../../../assets/img/car2.jpg'
  },
  {
    id: 3,
    nome: 'Oferta 3',
    desc: '',
    foto: '../../../assets/img/car3.jpg'
  },
  {
    id: 4,
    nome: 'Oferta 4',
    desc: '',
    foto: '../../../assets/img/car4.jpg'
  },
  {
    id: 5,
    nome: 'Oferta 5',
    desc: '',
    foto: '../../../assets/img/car5.jpg'
  },

  {
    id: 6,
    nome: 'Oferta 6',
    desc: '',
    foto: '../../../assets/img/car6.jpg'
  },
  {
    id: 7,
    nome: 'Oferta 7',
    desc: '',
    foto: '../../../assets/img/car7.jpg'
  },
  {
    id: 8,
    nome: 'Oferta 8',
    desc: '',
    foto: '../../../assets/img/car8.jpg'
  },
  {
    id: 9,
    nome: 'Oferta 9',
    desc: '',
    foto: '../../../assets/img/car9.jpg'
  },
  {
    id: 10,
    nome: 'Oferta 10',
    desc: '',
    foto: '../../../assets/img/car10.jpg'
  },
  {
    id: 11,
    nome: 'Oferta 11',
    desc: '',
    foto: '../../../assets/img/car11.jpg'
  },
  {
    id: 12,
    nome: 'Oferta 12',
    desc: '',
    foto: '../../../assets/img/car12.jpg'
  },
  {
    id: 13,
    nome: 'Oferta 13',
    desc: '',
    foto: '../../../assets/img/car13.jpg'
  },
  {
    id: 14,
    nome: 'Oferta 14',
    desc: '',
    foto: '../../../assets/img/car14.jpg'
  },
  {
    id: 15,
    nome: 'Oferta 15',
    desc: '',
    foto: '../../../assets/img/car15.jpg'
  },
  {
    id: 16,
    nome: 'Oferta 16',
    desc: '',
    foto: '../../../assets/img/car16.jpg'
  },
  {
    id: 17,
    nome: 'Oferta 17',
    desc: '',
    foto: '../../../assets/img/car17.jpg'
  },
  {
    id: 18,
    nome: 'Oferta 18',
    desc: '',
    foto: '../../../assets/img/car18.jpg'
  },
  {
    id: 19,
    nome: 'Oferta 19',
    desc: '',
    foto: '../../../assets/img/car19.jpg'
  },
  {
    id: 20,
    nome: 'Oferta 20',
    desc: '',
    foto: '../../../assets/img/car20.jpg'
  },
  {
    id: 21,
    nome: 'Oferta 21',
    desc: '',
    foto: '../../../assets/img/car21.jpg'
  },
  {
    id: 22,
    nome: 'Oferta 22',
    desc: '',
    foto: '../../../assets/img/car22.jpg'
  },
  {
    id: 23,
    nome: 'Oferta 23',
    desc: '',
    foto: '../../../assets/img/car23.jpg'
  },
  {
    id: 24,
    nome: 'Oferta 24',
    desc: '',
    foto: '../../../assets/img/car24.jpg'
  },
  {
    id: 25,
    nome: 'Oferta 25',
    desc: '',
    foto: '../../../assets/img/car25.jpg'
  },
  {
    id: 26,
    nome: 'Oferta 26',
    desc: '',
    foto: '../../../assets/img/car26.jpg'
  },

  {
    id: 27,
    nome: 'Oferta 27',
    desc: '',
    foto: '../../../assets/img/car27.jpg'
  },
  {
    id: 28,
    nome: 'Oferta 28',
    desc: '',
    foto: '../../../assets/img/car28.jpg'
  },

  {
    id: 29,
    nome: 'Oferta 29',
    desc: '',
    foto: '../../../assets/img/car29.jpg'
  },
  {
    id: 30,
    nome: 'Oferta 30',
    desc: '',
    foto: '../../../assets/img/car30.jpg'
  },
  {
    id: 31,
    nome: 'Oferta 31',
    desc: '',
    foto: '../../../assets/img/car31.jpg'
  },
  {
    id: 32,
    nome: 'Oferta 32',
    desc: '',
    foto: '../../../assets/img/car32.jpg'
  },
  {
    id: 33,
    nome: 'Oferta 33',
    desc: '',
    foto: '../../../assets/img/car33.jpg'
  },
  {
    id: 34,
    nome: 'Oferta 34',
    desc: '',
    foto: '../../../assets/img/car34.jpg'
  },
  
  

 
];

/* GET cars listing. */
router.get('/', function (req, res, next) {
  res.json(carros);
});


module.exports = router;
