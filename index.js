const root = document.querySelector("#root");

function init(){
    window.addEventListener("hashchange", function(){
        console.log(window.location.hash)
    })
}

window.addEventListener("load", () => {
    root.appendChild(cesar());
    init();
})