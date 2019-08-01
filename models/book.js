const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  synopsis: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image:{ type: String, required: true },
  link: { type: String, required: true },
  id: {type:String, required:true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
