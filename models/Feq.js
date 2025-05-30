import mongoose from 'mongoose';

const feqSchema = new mongoose.Schema({
  contactId: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  Type_of_vehicle:String,
  carInterests: [String],
  budget: String,
  leaseOrBuy: String,
  newOrPreOwned: String,
  tradeIn: Boolean,
  colorPreference: String,
  buyingFor: String,
  passengers: Number,
 hoping_to_accomplish_today: String,

});

const Feq = mongoose.model('Feq', feqSchema);
export default Feq;
