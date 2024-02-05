const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A course must have a name'],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'A course must have a subject'],
    trim: true,
  },
  teacher: {
    type: String,
    required: [true, 'A course must have a teacher'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A course must have a price'],
  },
  discountedPrice: {
    type: Number,
  },
  duration: {
    type: String,
    required: [true, 'A course must have a duration'],
    // match: [/^(\d+)(h)?\s?(\d+)?(m)?$/, 'Please use the duration format "Xh Ym"']
  },
  lectures: {
    type: Number,
    required: [true, 'A course must have a number of lectures'],
  },
  tests: {
    type: Number,
    required: [true, 'A course must have a number of tests'],
  },
  imageUrl: {
    type: String,
    required: [true, 'A course must have an image link'],
    trim: true,
  },
  link: {
    type: String,
    required: [true, 'A course must have a link'],
    trim: true,
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
