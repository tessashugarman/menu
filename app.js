var pages=["home", "about", "interact"];

function createNav() {
    var nav = document.createElement("nav");
        createButton(pages[0]);
        createButton(pages[1]);
        createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);
    }

}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    var wrapper=document.body.querySelector(".wrapper");
    if(pg==="home"){
        homePage();
    }else if (pg==="about"){
        aboutPage();
    }else{
        interactPage();
    }
}

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="Home Page";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    var subtitle=document.createElement("h3");
    header.innerHTML="About Page";
    subtitle.innerHTML="Tessa Shugarman"
    wrapper.appendChild(header);
    wrapper.appendChild(subtitle);
}

function interactPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var btn = document.createElement("BUTTON");
    var count=0;
    btn.innerHTML = "click me pls";
    document.body.addEventListener("click", function (){
        count=count+1;
        wrapper.innerHTML="Counter: " + count;
    })
    document.body.appendChild(btn);
}

createNav();
createWrapper();
navigate("home");
    // creates startup default on home page