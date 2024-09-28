import { Schema, model, models, Document } from "mongoose";

// Define an interface for the Category document
export interface ICategory extends Document {
  name: string;
  company?: string;
  active: boolean;
}

// Define the Category schema
const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Check if the Category model already exists before creating it
export const Category =
  models.Category || model<ICategory>("Category", categorySchema);
