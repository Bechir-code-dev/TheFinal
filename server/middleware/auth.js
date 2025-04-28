var jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      res.send("session is not connected");
    } else {
      const verified = await jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(verified.id);
      if (user) {
        req.user = user;
        next();
      }
    }
  } catch (error) {
    res.status(400).json({ msg: "invalid token" });
  }
};
module.exports = { auth };
