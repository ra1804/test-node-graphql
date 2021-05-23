/* eslint-disable consistent-return */
import mongoose from 'mongoose';

const footballerSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    team: { type: String },
    number: { type: String },
    height: { type: Number },
    rating: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Footballer', footballerSchema);
