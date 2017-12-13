import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';
const router = new Router();

// Get all Todos
router.route('/todos').get(TodoController.getTodos);

// Get one todo by id
router.route('/todos/:id').get(TodoController.getTodo);


router.route('/todos/:id').put(TodoController.updateTodo);
// Add a new Todo
router.route('/todos').post(TodoController.addTodo);

// Delete a todo by id
router.route('/todos/:id').delete(TodoController.deleteTodo);

export default router;
