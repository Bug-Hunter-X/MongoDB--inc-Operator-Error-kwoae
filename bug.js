```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("651967774246291234567")}, {"$inc": {"field": "1"}});
```