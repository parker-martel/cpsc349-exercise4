migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f586413hjep2v0q")

  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f586413hjep2v0q")

  collection.viewRule = "@request.auth.id != \"\" && user = @request.auth.id"

  return dao.saveCollection(collection)
})
