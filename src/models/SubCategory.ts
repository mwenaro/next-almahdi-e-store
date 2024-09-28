import { Schema, model, models, Document, Types } from 'mongoose';
import { ICategory } from './Category'; // Assuming Category is in the same directory

// Define an interface for the SubCategory document
export interface ISubCategory extends Document {
  name: string;
  category: Types.ObjectId | ICategory; // Reference to the Category model
  active: boolean;
}

// Define the SubCategory schema
const subCategorySchema = new Schema<ISubCategory>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category', // Reference to the Category model
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Check if the SubCategory model already exists before creating it
export const SubCategory = models.SubCategory || model<ISubCategory>('SubCategory', subCategorySchema);
