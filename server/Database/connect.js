const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(err));
};
module.exports = { connect };
