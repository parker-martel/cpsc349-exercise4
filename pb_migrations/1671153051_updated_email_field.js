migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp0a5ujkr5x2e9w")

  collection.name = "user_email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp0a5ujkr5x2e9w")

  collection.name = "email_field"

  return dao.saveCollection(collection)
})
