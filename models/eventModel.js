const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An event must have a name'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'An event must have a date']
  },
  time: {
    type: String,
    required: [true, 'An event must have a time'],
    // match: [/^(0?[1-9]|1[0-2]):[0-5][0-9](AM|PM|am|pm)$/, 'Please use the time format "hh:mmAM" or "hh:mmPM"']
  },
  location: {
    type: String,
    required: [true, 'An event must have a location'],
    trim: true
  },
  imageUrl: {
    type: String,
    required: [true, 'An event must have an image link'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'An event must have a description'],
    trim: true,
    // maxlength: [100, 'Description should not be more than 100 characters']
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
