const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/taskControllers');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const { route } = require('./app');

router.get('/tasks', tasksController.getAll);
router.get('/tasks/:id', tasksController.getById);

router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.updateTask);

module.exports = router;