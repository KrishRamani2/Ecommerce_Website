const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  const {name,email,username,password} = req.body;
  try {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists." });
    }

    const newUser = new User({
      name:req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString(),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ error: "Wrong Credentials" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_KEY
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json({ error: "Wrong Credentials" });
    }
    const accessToken = jwt.sign(
    {
      id:user._id,
      isAdmin:user.isAdmin,
    },
    process.env.JWT_KEY,
    {expiresIn:"3d"}
    );
    // Successful login
    const { password, ...userWithoutPassword } = user._doc;
    
    res.status(200).json({ message: "Login successful", ...userWithoutPassword, accessToken });
  } catch (error) { 
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
