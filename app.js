




//--------------------------------------(4)


let myFunc = (a) => {
    return a.reverse(a)
}

console.log(myFunc([1, 2, 3, 4, 5]));









//----------------------------------------------------------(1)


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

console.log(name(50, 30, 70));















//------------------------------------------------(2)

function Myfunc(a, b) {
    return Math.floor(b / a)
}
console.log(Myfunc(5, 15));







//---------------------------------------------(3)



let MyFunc = (a) => {
    return Math.floor(a / 10)
}

console.log(MyFunc(60));