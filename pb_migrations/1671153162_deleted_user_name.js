migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4le9t86akd6itrs");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4le9t86akd6itrs",
    "created": "2022-12-16 01:11:16.759Z",
    "updated": "2022-12-16 01:11:16.759Z",
    "name": "user_name",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mlvuswwd",
        "name": "username",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 5,
          "max": 15,
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
})
