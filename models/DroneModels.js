const mongoose = require('mongoose')
const DroneSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    image: String,
    price:Number
}
);
const DroneModel =mongoose.model("DRONE",DroneSchema,"drone");
//book:tên collection
module.exports = DroneModel;