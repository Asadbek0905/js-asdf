let inp = document.querySelector("input")
let btn = document.querySelector("button")

btn.onclick = () => {
    if(inp.value == "Asadbek"){
        document.write(`To'gri ism topdingiz : ${inp.value}`)
    }else{
        document.write(`Natog'ri ism topdingiz : ${inp.value}`)
    }
}