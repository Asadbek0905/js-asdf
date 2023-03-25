// let ab = +prompt("Sovg'ani narxini kiriting")

// function personalPrice(a, b, s, d) {
//     let jami = a + b + s + d

//     if(jami <= ab){
//         alert("Ha pulingiz yetadi");
//     }else{
//         alert("Yoq pulingiz yetmaydi");
//     }
// }

// console.log(personalPrice(20, 10, 30, 20));








let inp = document.querySelector("input")
let btn = document.querySelector(".b1")
let text = document.querySelector("h1")
let btn1 = document.querySelector(".b2")

btn.onclick = () => {
    text.innerHTML = `
    <h1 class="to">${inp.value}</h1>
    `
    inp.value = ""
}

btn1.onclick = () => {
    text.innerHTML = `
    <h1 class="to">ToDo List</h1>
    `
}