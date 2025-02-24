let imgcount = 0;
const maximg = 6;

function showall(){
    let allimages = document.querySelectorAll("img");
    for (let i = 0; i < allimages.length; i++){
        allimages[i].style.display = "block";
    }
}

function shownature(){
    let allimages = document.querySelectorAll("img");
    for( let i = 0; i<allimages.length;i++){
        allimages[i].style.display="none";
    }
    let natureimages = document.getElementsByClassName("nature");
    for(let i = 0; i< natureimages.length; i++){
        natureimages[i].style.display="block";
    }

}

function showcity(){
    let allimages = document.querySelectorAll("img");
    for( let i = 0; i<allimages.length;i++){
        allimages[i].style.display="none";
    }
    let cityimages = document.getElementsByClassName("city");
    for(let i = 0; i< cityimages.length; i++){
        cityimages[i].style.display="block";
    }
}

function showanimals(){
    let allimages = document.querySelectorAll("img");
    for( let i = 0; i<allimages.length;i++){
        allimages[i].style.display="none";
    }
    let animalimages = document.getElementsByClassName("animals");
    for(let i = 0; i< animalimages.length; i++){
        animalimages[i].style.display="block";
    }

}