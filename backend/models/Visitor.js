const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		// unique: true,
	},
	phone: {
		type: Number,
		// required: true,
	},
	message: {
		type: String,
		// required: true,
		maxLength: 100,
	},
	visitedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
	
	
});

module.exports = mongoose.model("Visitor", visitorSchema);
