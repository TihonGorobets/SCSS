let btn = document.querySelector(".header__mobile")
let nav = document.querySelector(".header__nav")
let line1 = document.querySelector(".header__line1")
let line2 = document.querySelector(".header__line2")

btn.addEventListener("click", () =>{
    if (nav.className === "header__nav"){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }

    if (line1.className === "header__line1"){
        line1.classList.add("active")
    }else{
        line1.classList.remove("active")
    }

    if (line2.className === "header__line2"){
        line2.classList.add("active")
    }else{
        line2.classList.remove("active")
    }
})