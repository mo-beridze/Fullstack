import mongoose, { Schema } from 'mongoose';
import { Todo } from '../types/todos.type';

const todosSchema: Schema = new Schema({
  topic: {
    type: String,
    required: true
  },
  userId: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  search: {
    type: String
  },
  status: {
    type: String,
    enum: ['completed', 'pending']
  },
  date: {
    type: Date,
    default: Date.now
  }
});
todosSchema.index({ topic: 'text', description: 'text' });
const Todos = mongoose.model<Todo>('Posts', todosSchema);
Todos.createIndexes();

export default Todos;
