migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2qpmwr84hzodna0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2qpmwr84hzodna0",
    "created": "2022-12-16 01:12:01.569Z",
    "updated": "2022-12-16 01:12:01.569Z",
    "name": "user_password",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mcxj1bfr",
        "name": "password",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 20,
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
