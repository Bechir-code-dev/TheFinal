const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  seates_zone: { type: String, required: true },
  totalprice: { type: Number, required: true },
  quantity :{type:Number , required:true},
});
const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = { Ticket };
// ticket schema done
