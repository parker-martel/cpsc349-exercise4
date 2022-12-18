migrate((db) => {
  const collection = new Collection({
    "id": "f586413hjep2v0q",
    "created": "2022-12-18 02:41:40.649Z",
    "updated": "2022-12-18 02:41:40.649Z",
    "name": "todo_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oakk0loo",
        "name": "todo_item",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 150,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f586413hjep2v0q");

  return dao.deleteCollection(collection);
})
