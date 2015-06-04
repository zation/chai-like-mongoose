var chai = require('chai');
var like = require('chai-like');
var mongoose = require('mongoose');

like.extend(require('../index'));
chai.should();
chai.use(like);

describe('chai-like-mongo', function() {
  it('should compare ObjectId', function() {
    var objectId = mongoose.Types.ObjectId('123456789012345678901234');
    objectId.should.like('123456789012345678901234');
    objectId.should.not.like('123456789012345678901235');
  });
});