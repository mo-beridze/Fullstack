import { Document } from 'mongoose';

export interface Todo {
  topic: string;
  description: string;
  search?: string | undefined;
  status?: string | undefined;
}

export interface DbPost extends Todo, Document {
  topic: string;
  description: string;
  userId: string;
}
