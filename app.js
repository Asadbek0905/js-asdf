




//--------------------------------------(4)


let t = document.querySelector(".t")
t.onclick = () => {
    let myFunc = (a) => {
        return a.reverse(a)
    }

    console.log(myFunc([1, 2, 3, 4, 5]));
}









//----------------------------------------------------------(1)


let w = document.querySelector(".w")
w.onclick = () => {
    let a = +prompt("1-sonni kiriting")
    let b = +prompt("2-sonni kiriting")
    let c = +prompt("3-sonni kiriting")

    let name = (a, b, c) => {
        let funcm = (a, b, c) => {
            if (a >= b && a >= c) {
                return a
            } else if (b >= a && b >= c) {
                return b
            } else if (c >= a && c >= b) {
                return c
            }
        }

        let func = () => {
            if (a <= b && a >= c) {
                return a
            } else if (b <= a && b <= c) {
                return b
            } else if (c >= a && c >= b) {
                return c
            }
        }

        return `Max: ${funcm(a, b, c)}, Min: ${func()}`
    }

    alert(name(a, b, c))
}
















//------------------------------------------------(2)


let e = document.querySelector(".e")

e.onclick = () => {
    let a = +prompt("niqob sonini kiriting")
    let b = +prompt("odam Sonni kiriting")

    function Myfunc(a, b) {
        return Math.floor(b / a)
    }
    console.log(Myfunc(a, b));
}







//---------------------------------------------(3)


let r = document.querySelector(".r")
r.onclick = () => {
    let a = +prompt("son kiritng")
    let MyFunc = (a) => {
        return Math.floor(a / 10)
    }

    console.log(MyFunc(a));
}