let req = {
    "home": 0,
    "about": 800,
    "skills": 1600,
    "experience": 2200,
    "hire":3200
}
let mode = 1;
function Redirect(link) {
    window.location.href = link;
}
function changePage(page) {
    window.scrollTo(0, req[page]);
}
function track() {
    let j = window.scrollY;
    // check for every item in req if any item's value is the most close to j then change the class of that element
    for (let i in req) {
        if (Math.abs(req[i] - j) < 400) {
            document.getElementById(i).className = "block cursor-pointer mt-4 lg:inline-block lg:mt-0 duration-100 ease-in-out border-indigo-600 mx-5 border-b-2 font-semibold text-white hover:text-white mr-4";
        }
        else {
            document.getElementById(i).className = "block mt-4 cursor-pointer font-semibold mx-5 lg:inline-block lg:mt-0 duration-100 ease-in-out text-indigo-300 hover:text-white";
        }
    }
}
function changeOnHover(element) {
    let item = document.querySelector("#"+element);
    function changeImg(id, param) {
        let s = document.querySelector("#" + id);
        s.src = "/src/" + id + param + ".png";
    }
    item.addEventListener("mouseover", function (event) {
        changeImg(element, "-hover"), false
    });
    item.addEventListener("mouseout", function (event) {
        changeImg(element, ""), false
    });
}
function toggleNav(){
    // make the buttons invisible
    if (mode == 1){
    let btns = document.querySelectorAll(".nav-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "text-sm visible lg:flex-grow nav-btn";
        mode = 0;
        console.log(mode);
    }
}
    else if (mode == 0){
        let btns = document.querySelectorAll(".nav-btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].className = "text-sm hidden lg:flex-grow nav-btn";
            mode = 1;
            console.log(mode);
        }
    }

    
}
changeOnHover("html");
changeOnHover("css");
changeOnHover("js");
changeOnHover("react");
changeOnHover("c");
changeOnHover("python");
changeOnHover("discord");
changeOnHover("github");
changeOnHover("twitter");
window.addEventListener("scroll", track);