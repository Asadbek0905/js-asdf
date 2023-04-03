




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



let a = +prompt("2-xonali son kiriting")
let MyFunc = (a) => {
    if (a <= 19) {
        return 1
    } else if (a <= 29) {
        return 2
    } else if (a <= 39) {
        return 3
    } else if (a <= 49) {
        return 4
    } else if (a <= 59) {
        return 5
    } else if (a <= 69) {
        return 6
    } else if (a <= 79) {
        return 7
    } else if (a <= 89) {
        return 8
    } else if (a <= 99){
        return 9
    }else{
        return 1
    }
}

console.log(MyFunc());