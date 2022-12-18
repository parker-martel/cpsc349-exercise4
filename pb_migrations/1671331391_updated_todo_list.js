migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f586413hjep2v0q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "venezhts",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "6xhea9ibfyl5xct",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f586413hjep2v0q")

  // remove
  collection.schema.removeField("venezhts")

  return dao.saveCollection(collection)
})
