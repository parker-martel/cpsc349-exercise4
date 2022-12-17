migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xhea9ibfyl5xct")

  // remove
  collection.schema.removeField("yue3xom1")

  // remove
  collection.schema.removeField("wpsxk414")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xhea9ibfyl5xct")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yue3xom1",
    "name": "username_field",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": 20,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wpsxk414",
    "name": "email_field",
    "type": "email",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
