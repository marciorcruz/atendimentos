const clientesController = require('../controllers/clientesController');
module.exports = (app) => {
   app.post('/clientes', clientesController.post);
   app.put('/clientes/:id', clientesController.put);
   app.delete('/clientes/:id', clientesController.delete);
   app.get('/clientes', clientesController.get);
   app.get('/clientes/start', clientesController.start);
   app.get('/clientes/:id', clientesController.getById);
}