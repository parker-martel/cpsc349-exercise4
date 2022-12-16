migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jp0a5ujkr5x2e9w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jp0a5ujkr5x2e9w",
    "created": "2022-12-15 06:51:14.175Z",
    "updated": "2022-12-16 01:11:29.341Z",
    "name": "user_email",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fnmqk5nd",
        "name": "email_field",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
