const router = require("express").Router();
const CryptoJS = require("crypto-js");
const { VerifyToken, VerifyTokenandAuthorization, VerifyTokenAndAdmin } = require('./VerifyTokens');
const User = require("../models/User");

router.put("/:id", async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.CRYPTO_KEY
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...userWithoutPassword } = user._doc;
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    try {
        let users;
        const qNew = req.query.new;
        const qAdmin = req.query.isAdmin;

        if (qNew) {
            users = await User.find().sort({ createdAt: -1 }).limit(5);
        } else if (qAdmin) {
            users = await User.find({ isAdmin: qAdmin });
        } else {
            users = await User.find().sort({ _id: -1 }).limit(5);
        }

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/stats", async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", total: { $sum: 1 } } }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
