# chai-like-mongo
The mongo plugin for chai-like used to compare object id.

## Install

Install with [npm](https://www.npmjs.com/package/chai-like-mongo)

```bash
npm install --save-dev chai-like-mongo
```

## Usage

```js
var chai = require('chai');
var like = require('chai-like');

like.extend(require('chai-like-mongo'));
chai.use(like);
```

## Assertions

Compare two object id.

```js
var objectId = mongodb.ObjectID('123456789012345678901234');

objectId.should.like('123456789012345678901234');
objectId.should.not.like('123456789012345678901235');
```
