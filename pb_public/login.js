const pb = new PocketBase("http://127.0.0.1:8090/");
let loginButton = document.querySelector("#login-button");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let nav = document.querySelector("#rightNav");

loginButton.addEventListener("click", async event => { 

    const authData = await pb.collection('users').authWithPassword(
        username.value,
        password.value,
    );
    
    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
    console.log(`Logged in as ${username.value}`);


  });

    console.log(pb.authStore.isValid);
if (pb.authStore.isValid){
    let input = document.createElement('a');
    input.id = "logout-button";
    input.classList.add("bg-black");
    input.classList.add("text-white");
    input.classList.add("py-1");
    input.classList.add("px-4");
    input.classList.add("shadow-xl");
    input.classList.add("rounded");

    input.href = "/index.html";
    input.innerHTML = "Logout";
    rightNav.insertAdjacentElement("beforeend", input);

} else {
    let input = document.createElement('a');
    input.id = "getStarted-button";
    input.classList.add("bg-blue-400");
    input.classList.add("text-white");
    input.classList.add("py-1");
    input.classList.add("px-3");
    input.classList.add("shadow-lg");
    input.classList.add("rounded");

    input.href = "/signup.html";
    input.innerHTML = "Get Started"
    rightNav.insertAdjacentElement("beforeend", input);
}




