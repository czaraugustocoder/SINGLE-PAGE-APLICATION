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
            root.appendChild(about());
            break;
            case "#contatos":
            root.appendChild(contato());
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