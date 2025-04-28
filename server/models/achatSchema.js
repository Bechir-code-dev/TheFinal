const mongoose = require("mongoose");

const achatSchema = new mongoose.Schema({

  
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
  ticketId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'ticket' },
  bookingDate: {type: Date, default: Date.now}
});

const Achat = mongoose.model("achat",achatSchema);

module.exports = { Achat};