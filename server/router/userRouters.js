const express = require("express");
const route = express.Router();
const { User } = require("../models/Schema");
const { auth } = require("../middleware/auth");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

route.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send(`/uploads/${req.file.filename}`);
});

route.get("/images/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    if (!user.image) {
      return res.status(404).json({ error: "user does not have an image" });
    }
    const filePath = path.join(__dirname, "..", user.image);
    console.log("Resolved File Path:", filePath);
    console.log("File Exists:", fs.existsSync(filePath));
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({ error: "Image not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

route.post("/adduser", upload.single("image"), async (req, res) => {
  try {
    const newOne = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      num: req.body.num,
      // image :req.file? `/uploads/${req.file.filename}`: null
      image: req.body.image,
      role: req.body.role,
    });
    const saltRounds = 10;
    const cryptPassword = await bcrypt.hash(req.body.password, saltRounds);
    newOne.password = cryptPassword;
    await newOne.save();

    // const payload = { id: newOne.id };
    // const token = jwt.sign(payload, process.env.JWT_SECRET, {
    //   expiresIn: "24h",
    // });

    res.status(200).json({ newOne });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.get("/auth", auth, (req, res) => {
  res.send({ user: req.user });
});

route.get("/getOneUser/:id", async (req, res) => {
  try {
    const OneUser = await User.findById(req.params.id);
    res.status(200).json({ OneUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.send(`You don't have an account `);
    } else {
      const idendity = await bcrypt.compare(req.body.password, user.password);
      if (!idendity) {
        res.send(`Wrong Password`);
      } else {
        const payload = { id: user._id };
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });

        res.status(200).json({ user, token });
      }
    }
  } catch (error) {
    res.status(400).json({ error: "the error is" });
  }
});

route.delete("/deleteUser/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleteUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.put("/updateUser/:id", async (req, res) => {
  try {
    const NewUpdated = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      num: req.body.num,
      numCin: req.body.numCin,
    };
    const updateUser = await User.findByIdAndUpdate(req.params.id, NewUpdated, {
      new: true,
    });
    res.status(200).json({ updateUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});
route.get("/getUsers", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = route;
