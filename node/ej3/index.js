const es_par = require('./num.js');
const logplease = require('logplease');
const logger = logplease.create('utils');
const numeros = [2, 3, 101, 201, 202, 100];
numeros.forEach(numero => {
  if (es_par(numero)) {
    logger.info(`${numero} es par`);
  } else {
    logger.error(`${numero} no es par`);
  }
});
