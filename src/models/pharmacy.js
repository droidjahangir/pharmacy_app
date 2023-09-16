// models index
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// pharmacy model
const pharmacySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      index: true,
      required: true,
    },
    description: {
      type: String,
    },
    images: [String],
    deliveryCharge: {
      type: Number,
    },
    price: {
      type: Number,
      default: 0,
    },
    freeDelivery: {
      type: Boolean,
      default: false,
    },
    avgRating: {
      type: Number,
      default: 0,
    },
    givenRating: {
      type: Number,
      default: 0,
    },
    distance: {
      type: Number,
      default: 0,
    },
    timeToReach: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const pharmacy = mongoose.model('pharmacy', pharmacySchema);

export default pharmacy;
