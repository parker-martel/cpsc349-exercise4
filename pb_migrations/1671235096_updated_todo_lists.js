migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj")

  collection.name = "todo_list"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj")

  collection.name = "todo_lists"

  return dao.saveCollection(collection)
})
