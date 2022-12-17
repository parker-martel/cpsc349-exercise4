const pb = new PocketBase("http://127.0.0.1:8090/");
let nav = document.querySelector("#rightNav");


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




