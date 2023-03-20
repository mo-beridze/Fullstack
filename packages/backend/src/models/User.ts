import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/auth.type';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model<IUser>('User', userSchema);

export default User;
