migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp0a5ujkr5x2e9w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnmqk5nd",
    "name": "email_field",
    "type": "email",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp0a5ujkr5x2e9w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnmqk5nd",
    "name": "email_field",
    "type": "email",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
