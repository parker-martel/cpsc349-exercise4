const pb = new PocketBase("http://127.0.0.1:8090/");
let logoutButton = document.querySelector("#logout-button");

logoutButton.addEventListener("click", async event => { 
    
    // logout the last authenticated account
    const logout = pb.authStore.clear();
    console.log("Logged out!");

  });



