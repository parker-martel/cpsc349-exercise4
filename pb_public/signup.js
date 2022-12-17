const pb = new PocketBase("http://127.0.0.1:8090/");
let signupButton = document.querySelector("#signup-button");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


signupButton.addEventListener("click", async event => { 

    // example create data
    const data = {
        "username": username.value,
        "email": email.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value
    };

    const record = await pb.collection('users').create(data);

  });

  console.log(username.value);
  console.log(user);
  console.log(client.authStore.token); // output the token
  console.log(client.authStore.model); // output the authenticated User or Admin model


