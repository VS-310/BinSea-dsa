const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: false },
  age: { type: Number, required: false },
  email: { type: String, required: false, unique: true },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  photo_file: {type: String} //store base64 encoded data
});

module.exports = mongoose.model('Student', studentSchema);
