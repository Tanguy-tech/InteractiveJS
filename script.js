//==========================FONCTIONNALITÉ 1=======================================
//=================================================================================

let click = document.querySelector('footer');

click.addEventListener('click', display);

function display() {
    console.log('clique');
}

//==========================FONCTIONNALITÉ 1 bis===================================
//=================================================================================

let nbClick = 0;

click.addEventListener('click', displayNb);

function displayNb() {
    nbClick += 1;
    console.log('clic numéro ' + nbClick);
}

//==========================FONCTIONNALITÉ 2=======================================
//=================================================================================

nav  = document.getElementById("navbarHeader");
hamB = document.querySelector("button", ".navbar-toggler");
   
hamB.addEventListener('click', function() {
    nav.classList.toggle("collapse")
})

//==========================FONCTIONNALITÉ 3=======================================
//=================================================================================

let btnEdit = document.querySelector('.btn-outline-secondary');
let textCard = document.querySelector('.card-text');

btnEdit.addEventListener('click', function(){
    textCard.style.color = "red"
})

//==========================FONCTIONNALITÉ 4=======================================
//=================================================================================

let secBtn = document.querySelectorAll('.btn-outline-secondary')[1];
let secTextCard = document.querySelectorAll('.card-text')[1];

let textStatus = false;

secBtn.addEventListener('click', function(){
    if (textStatus == false) {
        secTextCard.style.color = "green";
        textStatus = true;
    } else if (textStatus == true) {
        secTextCard.style.color = "rgb(33, 37, 41)";
        textStatus = false;
    }
})

//==========================FONCTIONNALITÉ 5=======================================
//=================================================================================

let navBar = document.querySelector('header');
let bootStrap = document.querySelector('head').querySelector('link');
let dbclicked = false;

navBar.addEventListener('dblclick', function(){
    if (dbclicked == false) {
        bootStrap.setAttribute('href', '#');
        dbclicked = true;
    } else if (dbclicked == true) {
        bootStrap.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
        dbclicked = false;
    }
})

//==========================FONCTIONNALITÉ 6=======================================
//=================================================================================

let vButton = document.querySelectorAll('.btn-success');

vButton.forEach(function(m){
    m.addEventListener('mouseover', function(g){
        card = g.target.offsetParent.offsetParent.offsetParent
        text = card.firstElementChild.lastElementChild.firstElementChild
        if (card.style.maxWidth == "100%") {
            text.hidden = true;
            card.style.maxWidth = "20%";
        } else {
            text.hidden = false;
            card.style.maxWidth = "100%";
        }
    })
})


//==========================FONCTIONNALITÉ 7=======================================
//=================================================================================


let main = document.querySelector('.album');
let alb = main.firstElementChild.firstElementChild;
let goRight = document.querySelector('.btn-secondary.my-2');

goRight.addEventListener('click', function(){
    alb.insertBefore(alb.lastElementChild, alb.firstElementChild)
})


// on remarque qu'en combinant la fonctionnalité 6 et 7 les cartes se reduises correctement meme en les faisant changer de place ;)

//==========================FONCTIONNALITÉ 8=======================================
//=================================================================================

let goLeft = document.querySelector('.btn-primary.my-2');
goLeft.setAttribute('href', '#');

goLeft.addEventListener('click', function(){
    alb.insertBefore(alb.firstElementChild, alb.lastChild)
})

//==========================FONCTIONNALITÉ 9=======================================
//=================================================================================

let logo = document.querySelector('.navbar-brand').querySelector('strong');
let page = document.getElementsByTagName('body');

logo.addEventListener('keypress', myScript);

function myScript(key) {
    if (key == 'a') {
        page.style.maxWidth = col-4;
    } if (key == 'y') {
        page.style.maxWidth = col-4;
        page.style = center;
    } if (key == 'p'){
        page.style.float = right;
    } if (key == 'b') {
        page.style.maxWidth = '100%';
    }
}