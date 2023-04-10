// let list = document.querySelector(".list-group")
// let bnt = document.querySelector(".btn")
// bnt.onclick = () =>{
//     !list.classList.contains("active") ? list.classList.add("active") : list.classList.remove("active")
// }










let h3 = document.querySelector("h3")
let start = document.querySelector(".btn-primary")
let stop = document.querySelector(".btn-secondary")
let reset = document.querySelector(".btn-danger")


start.onclick = () => {
    let i = 0;
    setInterval(() => {
        h3.innerHTML = i;
        let a = 1
        i += a
    }, 1000)
    i++
}


stop.onclick = () => {
    h3 = "0"

}



reset.onclick = () => {
    let i = 0;
    setInterval(() => {
        time.innerHTML = i;
        let a = 0
        i = a
    })
}












