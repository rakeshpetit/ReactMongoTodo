import Todo from '../models/todo';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all todos
 * @param req
 * @param res
 * @returns void
 */
export function getTodos(req, res) {
  Todo.find().exec((err, todos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todos });
  });
}

/**
 * Save a todo
 * @param req
 * @param res
 * @returns void
 */
export function addTodo(req, res) {
  if (!req.body.todo.name || req.body.todo.completed) {
    res.status(403).end();
  }

  const newTodo = new Todo(req.body.todo);

  // Let's sanitize inputs
  newTodo.name = sanitizeHtml(newTodo.name);
  newTodo.completed = sanitizeHtml(newTodo.completed);
  newTodo.id = sanitizeHtml(newTodo.id);
  newTodo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo: saved });
  });
}

/**
 * Get a single todo
 * @param req
 * @param res
 * @returns void
 */
export function getTodo(req, res) {
  Todo.findOne({ id: req.params.id }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo });
  });
}

/**
 * Delete a todo
 * @param req
 * @param res
 * @returns void
 */
export function deleteTodo(req, res) {
  Todo.findOne({ id: req.params.id }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }

    todo.remove(() => {
      res.status(200).end();
    });
  });
}

export function updateTodo(req, res) {
  Todo.findOne({ id: req.params.id }).exec((err, todo) => {
    const newtodo = todo;
    if (err) {
      res.status(500).send(err);
    }
    newtodo.completed = !newtodo.completed;
    newtodo.save((error, saved) => {
      if (err) {
        res.status(500).send(error);
      }
      res.json({ todo: saved });
    });
  });
}
