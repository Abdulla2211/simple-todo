import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || '');
mongoose.Promise = global.Promise;

const todoSchema = new Schema(
  {
    name: String,
    status: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
export default Todo;
