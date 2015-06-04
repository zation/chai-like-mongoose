var chai = require('chai');
var like = require('chai-like');
var mongodb = require('mongodb');

like.extend(require('../index'));
chai.should();
chai.use(like);

describe('chai-like-mongo', function() {
  it('should compare ObjectId', function() {
    var objectId = mongodb.ObjectID('123456789012345678901234');
    objectId.should.like('123456789012345678901234');
    objectId.should.not.like('123456789012345678901235');
  });
});