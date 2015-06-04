var mongodb = require('mongodb');

module.exports = {
  match: function(object) {
    return object instanceof mongodb.ObjectId;
  },
  assert: function(object, expected) {
    return object.equals(expected);
  }
};