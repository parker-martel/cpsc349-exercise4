migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3jvu7zhk",
    "name": "todo_text",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 150,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3jvu7zhk",
    "name": "todolist_name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
