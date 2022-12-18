migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nfauov4jubu4m47");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nfauov4jubu4m47",
    "created": "2022-12-17 03:54:28.984Z",
    "updated": "2022-12-17 03:54:28.984Z",
    "name": "todo_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ve5kcful",
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
})
