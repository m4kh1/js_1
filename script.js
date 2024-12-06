
var inVal = document.querySelector("input[type='text']");
var b = document.querySelector("button");
var listFinal = document.querySelector("#todoList");
var listArr = [];

function getItem(){
    if(inVal.value.length > 0){
        listArr.push(inVal.value);
    }  
    renderList();

    inVal.value = "";
}

function renderList(){
    listFinal.innerHTML = "";

    for(let item of listArr){
        listFinal.innerHTML += `<li>${item}</li>`;
    }
}

function imgChange(){
    document.querySelector("img").src = "https://res.cloudinary.com/dwuwuaov5/image/upload/f_auto,q_auto/v1527708327/cpu-564771_960_720.jpg";
    document.querySelector("img").alt = "processor";
    document.querySelector("h1").innerText = "Easter Egg";
}

function changeAgain(){
    document.querySelector("img").src = "https://res.cloudinary.com/dwuwuaov5/image/upload/f_auto,q_auto/v1527708326/chips-20072_960_720.jpg";
    document.querySelector("img").alt = "Two sticks of RAM";
    document.querySelector("h1").innerText = "To Do List";
}

b.addEventListener("click", getItem);
document.querySelector("img").addEventListener("mouseenter", imgChange);
document.querySelector("img").addEventListener("mouseleave", changeAgain);
