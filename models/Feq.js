import mongoose from 'mongoose';

const feqSchema = new mongoose.Schema({
  contactId: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  carInterests: [String],
  budget: String,
  leaseOrBuy: String,
  newOrPreOwned: String,
  tradeIn: Boolean,
  colorPreference: String,
  buyingFor: String,
  passengers: Number,
  annualMileage: String
});

const Feq = mongoose.model('Feq', feqSchema);
export default Feq;
