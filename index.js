const root = document.querySelector("#root");

function init(){
    window.addEventListener("hashchange", function(){
        root.innerHTML = " ";
        console.log(window.location.hash)
        switch(window.location.hash){
            case "#cesar":
            root.appendChild(cesar());
            break;
            case "#about":
            root.appendChild(cesar());
            break;
            case "#contatos":
            root.appendChild(cesar());
            break;
            default:
            root.appendChild(cesar());
        }
    })
}

window.addEventListener("load", () => {
    root.appendChild(cesar());
    init();
})