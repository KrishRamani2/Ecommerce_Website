const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema(
    {
        email: 
        { 
            type: String, 
            required: true, 
            unique: true 
        },
    },
);

module.exports = mongoose.model("Mail", MailSchema);