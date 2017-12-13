import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: { type: 'String', required: true },
  completed: { type: 'Boolean', required: true, default: false },
  id: { type: 'String', required: true }
});

export default mongoose.model('Todo', todoSchema);
