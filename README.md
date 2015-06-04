# chai-like-mongo
The mongoose plugin for chai-like used to compare object id.

## Install

Install with [npm](https://www.npmjs.com/package/chai-like-mongoose)

```bash
npm install --save-dev chai-like-mongoose
```

## Usage

```js
var chai = require('chai');
var like = require('chai-like');

like.extend(require('chai-like-mongoose'));
chai.use(like);
```

## Assertions

Compare two object id.

```js
var mongoose = require('mongoose');
var objectId = mongoose.Types.ObjectId('123456789012345678901234');

objectId.should.like('123456789012345678901234');
objectId.should.not.like('123456789012345678901235');
```
