migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj")

  // remove
  collection.schema.removeField("wg1ifiwp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wg1ifiwp",
    "name": "username",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
