import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuoteRequest extends Document {
  fullName: string;
  companyName?: string;
  phoneNumber: string;
  emailAddress: string;
  pickupLocation: string;
  deliveryLocation: string;
  serviceType: string;
  cargoWeight?: string;
  cargoType?: string;
  notes?: string;
  estimatedCost?: string;
  status: 'pending' | 'quoted' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [120, 'Name cannot exceed 120 characters'],
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: [150, 'Company name cannot exceed 150 characters'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxlength: [30, 'Phone number cannot exceed 30 characters'],
    },
    emailAddress: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      maxlength: [150, 'Email cannot exceed 150 characters'],
    },
    pickupLocation: {
      type: String,
      required: [true, 'Pickup location is required'],
      trim: true,
      maxlength: [200, 'Pickup location cannot exceed 200 characters'],
    },
    deliveryLocation: {
      type: String,
      required: [true, 'Delivery location is required'],
      trim: true,
      maxlength: [200, 'Delivery location cannot exceed 200 characters'],
    },
    serviceType: {
      type: String,
      required: [true, 'Service type is required'],
      enum: [
        'full-truckload',
        'less-than-truckload',
        'temperature-controlled',
        'warehousing',
        'real-time-tracking',
        'express-dispatch',
      ],
      default: 'full-truckload',
    },
    cargoWeight: {
      type: String,
      trim: true,
      maxlength: [50, 'Weight cannot exceed 50 characters'],
    },
    cargoType: {
      type: String,
      trim: true,
      maxlength: [100, 'Cargo type cannot exceed 100 characters'],
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
    },
    estimatedCost: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'quoted', 'confirmed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
QuoteRequestSchema.index({ emailAddress: 1 });
QuoteRequestSchema.index({ serviceType: 1, createdAt: -1 });
QuoteRequestSchema.index({ createdAt: -1 });

const QuoteRequest: Model<IQuoteRequest> =
  mongoose.models.QuoteRequest ||
  mongoose.model<IQuoteRequest>('QuoteRequest', QuoteRequestSchema);

export default QuoteRequest;
