migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0tnhdtpg138gojj",
    "created": "2022-12-16 01:16:46.072Z",
    "updated": "2022-12-17 00:12:10.367Z",
    "name": "todo_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3jvu7zhk",
        "name": "todo_text",
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
