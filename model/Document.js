// Defines a mongoos schema for document
// The schema has two fields: _id (String type, used as the unique identifier for the document) and data (Object type, to store the document's content).

const {Schema, model} = require('mongoose');

const documentSchema = new Schema({
    _id: String,
    data: Object
});

module.exports = model('Document', documentSchema, 'documents');