import mongoose, { Schema, Document, Model } from "mongoose";

// Define TypeScript interface for the blog document
export interface IBlog extends Document {
  title: string;
  content: string;
  image: string;
  author: string;
  createdAt?: Date;
}

// Define the Mongoose schema for the blog
const BlogSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Export the Mongoose model with TypeScript typings
export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
