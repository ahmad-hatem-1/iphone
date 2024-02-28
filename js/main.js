let imges = document.querySelectorAll(".mobile img")
let img_main =  document.querySelector(".img-main img")
imges.forEach(e=>{
    e.classList.contains("active")?img_main.setAttribute("src",e.getAttribute("src")): ""
    e.addEventListener("click",_=>{
        imges.forEach(el=>{
            el.classList.remove("active")

        })
        e.classList.add("active")
        img_main.setAttribute("src",e.getAttribute("src"))

    })
})
function background(color){
    document.querySelector("body").style.cssText = `
    transition: .3s;
    background-color:${color} !important ;
    `
}