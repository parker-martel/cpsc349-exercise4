migrate((db) => {
  const collection = new Collection({
    "id": "6hfbnrud3ak9qmr",
    "created": "2022-12-16 03:03:30.411Z",
    "updated": "2022-12-16 03:03:30.411Z",
    "name": "todo_elements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0lmotuul",
        "name": "text_field",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qr9pntu7",
        "name": "username",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "0tnhdtpg138gojj",
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
  const collection = dao.findCollectionByNameOrId("6hfbnrud3ak9qmr");

  return dao.deleteCollection(collection);
})
