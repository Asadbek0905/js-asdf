let flex = document.querySelector(".flex")
let btn = document.querySelector(".dflex")
let just = document.querySelector(".just")
let just1 = document.querySelector(".just1")
let ali = document.querySelector(".ali")
let ali1 = document.querySelector(".ali1")
let box = document.querySelectorAll(".box")
let just2 = document.querySelector(".just2")
let ali2 = document.querySelector(".ali2")

btn.onclick = () => {
    flex.style.display = "flex"
}

just2.onclick = () => {
    flex.style.justifyContent = "start"
}

just.onclick = () => {
    flex.style.justifyContent = "center"
}

just1.onclick = () => {
    flex.style.justifyContent = "end"
}

ali.onclick = () => {
    flex.style.alignItems = "center"
}
ali2.onclick = () => {
    flex.style.alignItems = "start"
}

ali1.onclick = () => {
    flex.style.alignItems = "end"
}







let vtn = document.querySelector(".vtn")


vtn.onclick = () => {
    let a = +prompt("1-qizda qancha pul borligini yozing")
    let b = +prompt("2-qizda qancha pul borligini yozing")
    let c = +prompt("3-qizda qancha pul borligini yozing")
    let d = +prompt("4-qizda qancha pul borligini yozing")
    let f = +prompt("Sovg'aning narxini yozing")
    let all = a + b + c + d
    all <= f ? alert("Ha pulingiz yetadi") : alert("Yoq pulingiz yetmaydi")
}