


let count = document.querySelector(".count")
let increament = document.querySelector(".increament")
let reset = document.querySelector(".reset")

let audio = document.querySelector("audio")

var num = 0
increament.onclick = () => {
    num >= 99 ? num = 0 : num++
    audio.play()
}

reset.onclick = () => {
    // let num2 = 0;
    num = 0;
}
setInterval(() => {
    count.innerHTML = num
}, 100)

