let signupButton = document.querySelector("#signup-button");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

const pb = new PocketBase("http://127.0.0.1:8090/");

signupButton.addEventListener("click", async event => { 
    const user = await pb.collection("users").create({
        username: username.value,
        email: email.value,
        password: password.value,
    });
    console.log(user);

  });
