migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("4te6aqnu")

  // remove
  collection.schema.removeField("uynqkoo3")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4te6aqnu",
    "name": "user_email",
    "type": "email",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uynqkoo3",
    "name": "user_password",
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
