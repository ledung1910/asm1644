const mongoose = require('mongoose')
const LegoSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    image: String,
    price:Number
}
);
const LegoModel =mongoose.model("LEGO",LegoSchema,"lego");
//book:tên collection
module.exports = LegoModel;