migrate((db) => {
  const collection = new Collection({
    "id": "6xhea9ibfyl5xct",
    "created": "2022-12-17 05:28:11.785Z",
    "updated": "2022-12-17 05:28:11.785Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yue3xom1",
        "name": "username_field",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wpsxk414",
        "name": "email_field",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "jr0oi1ii",
        "name": "password_field",
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
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6xhea9ibfyl5xct");

  return dao.deleteCollection(collection);
})
