import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContactEnquiry extends Document {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  subject: string;
  message: string;
  ipAddress?: string;
  status: 'new' | 'in_review' | 'contacted' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}

const ContactEnquirySchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [120, 'Name cannot exceed 120 characters'],
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
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [150, 'Subject cannot exceed 150 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    ipAddress: {
      type: String,
      trim: true,
      default: 'anonymous',
    },
    status: {
      type: String,
      enum: ['new', 'in_review', 'contacted', 'resolved'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for high-frequency queries
ContactEnquirySchema.index({ emailAddress: 1 });
ContactEnquirySchema.index({ createdAt: -1 });
ContactEnquirySchema.index({ status: 1, createdAt: -1 });
ContactEnquirySchema.index({ subject: 1 });

const ContactEnquiry: Model<IContactEnquiry> =
  mongoose.models.ContactEnquiry ||
  mongoose.model<IContactEnquiry>('ContactEnquiry', ContactEnquirySchema);

export default ContactEnquiry;
