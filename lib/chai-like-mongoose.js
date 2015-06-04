var mongoose = require('mongoose');

module.exports = {
  match: function(object) {
    return object instanceof mongoose.Types.ObjectId;
  },
  assert: function(object, expected) {
    return object.equals(expected);
  }
};