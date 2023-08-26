let pos_x1 = 4;
let pos_x2 = 4;

function scrollSnap1(direction){
    let slider_class = document.querySelector(".fave");
    let cards = slider_class.querySelectorAll(".card");
    let right_arrow = document.querySelector(".right-arrow1");
    let left_arrow = document.querySelector(".left-arrow1");
    let hearts = slider_class.querySelectorAll(".heart");

    if (direction === "right"){
        var translate_x = "translateX(" + (-285*pos_x1) + "px)";
        left_arrow.style.visibility = "visible";
        pos_x1 += 2;
    }else{
        right_arrow.style.visibility = "visible";
        var translate_x = "translateX(" + (-285*(pos_x1 - 2) + 285*4) + "px)";
        pos_x1 -= 2;
    }

    if (translate_x == "translateX(0px)"){
        left_arrow.style.visibility = "hidden";
        right_arrow.style.visibility = "visible";
    } else if(pos_x1 == 8){
        right_arrow.style.visibility = "hidden";
        left_arrow.style.visibility = "visible";
    }

    // console.log(translate_x);
    cards.forEach((card) =>{
        card.style.display  = "block";
        card.style.transform = translate_x;
        card.style.transition = "transform 0.8s ease";
    });

    hearts.forEach((heart) => {
        heart.style.display = "inline";
    });
}

function scrollSnap2(direction){
    let slider_class = document.querySelector(".ig");
    let cards = slider_class.querySelectorAll(".card");
    let right_arrow2 = document.querySelector(".right-arrow2");
    let left_arrow2 = document.querySelector(".left-arrow2");
    let hearts = slider_class.querySelectorAll(".heart");

    if (direction === "right"){
        var translate_x = "translateX(" + (-285*pos_x2) + "px)";
        left_arrow2.style.visibility = "visible";
        pos_x2 += 2;
    }else{
        right_arrow2.style.visibility = "visible";
        var translate_x = "translateX(" + (-285*(pos_x2 - 2) + 285*4) + "px)";
        pos_x2 -= 2;
    }

    if (translate_x == "translateX(0px)"){
        left_arrow2.style.visibility = "hidden";
        right_arrow2.style.visibility = "visible";
    } else if(pos_x2 == 8){
        right_arrow2.style.visibility = "hidden";
        left_arrow2.style.visibility = "visible";
    }

    // console.log(translate_x);
    cards.forEach((card) =>{
        card.style.display  = "block";
        card.style.transform = translate_x;
        card.style.transition = "transform 0.8s ease";
    });

    hearts.forEach((heart) => {
        heart.style.display = "inline";
    });
}