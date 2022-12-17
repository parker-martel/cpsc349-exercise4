migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xhea9ibfyl5xct")

  // remove
  collection.schema.removeField("jr0oi1ii")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xhea9ibfyl5xct")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jr0oi1ii",
    "name": "password_field",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
