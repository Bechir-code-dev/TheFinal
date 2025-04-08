const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  user_fullname: { type: String, required: true },
  seates_zone: { type: String, required: true },
  totalprice: { type: String, required: true },
  bookingdate: { type: Date, required: true },
  status: { type: String, required: true },
});
const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = { Ticket };
// ticket schema done
