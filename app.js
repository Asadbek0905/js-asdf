let ab = +prompt("Sovg'ani narxini kiriting")

function personalPrice(a, b, s, d) {
    let jami = a + b + s + d

    if(jami <= ab){
        alert("Ha pulingiz yetadi");
    }else{
        alert("Yoq pulingiz yetmaydi");
    }
}

console.log(personalPrice(20, 10, 30, 20));