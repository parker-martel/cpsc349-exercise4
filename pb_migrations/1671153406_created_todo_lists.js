migrate((db) => {
  const collection = new Collection({
    "id": "0tnhdtpg138gojj",
    "created": "2022-12-16 01:16:46.072Z",
    "updated": "2022-12-16 01:16:46.072Z",
    "name": "todo_lists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3jvu7zhk",
        "name": "todolist_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("0tnhdtpg138gojj");

  return dao.deleteCollection(collection);
})
