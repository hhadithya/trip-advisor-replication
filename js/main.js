function dropdown(){
    let more_options = document.getElementById("more-options");
    let more_btn = document.getElementById("more-btn");
    
    const style = getComputedStyle(more_options);
    if (style.display == "none") {
        more_btn.style.border = "none";
        more_btn.style.borderStyle = "double";
        more_options.style.display = "flex";
    } else {
        more_btn.style.border = "0.8px solid black";
        more_options.style.display = "none";
    }
}

function displayLinks(event){
    let btnId = event.target.id;
    let element = document.getElementById(btnId);
    let reset = document.querySelector(".tabs");
    let active_btn = reset.querySelectorAll("button");

    let link_card1 = document.getElementById("trending-links-card1");
    let link_card2 = document.getElementById("trending-links-card2");
    let link_card3 = document.getElementById("trending-links-card3");
    let link_card4 = document.getElementById("trending-links-card4");
    
    const card_array = [link_card1, link_card2, link_card3, link_card4];
    for (let i = 0; i < 4; i++){
        btn_element = active_btn[i];
        btn_element.style.borderBottom = "2px solid white";
        card_array[i].style.display = "none";
    }
    switch(btnId){
        case "link-btn1":
            link_card1.style.display = "grid";
            element.style.borderBottom = "2px solid black";
            break;
        case "link-btn2":
            link_card2.style.display = "grid";
            element.style.borderBottom = "2px solid black";
            break;
        case "link-btn3":
            link_card3.style.display = "grid";
            element.style.borderBottom = "2px solid black";
            break;
        case "link-btn4":
            link_card4.style.display = "grid";
            element.style.borderBottom = "2px solid black";
            break;
    }
}

function search(){
    let detail_display = getComputedStyle(results).display;

    if (detail_display == "flex"){
        searchRemoveStyle();
    }else{
        back.style.height = 140 + "vh";
        form.style.borderRadius = "10px";
        results.style.display = "flex";
        results.style.transition = "display 0.5s ease";
        back.style.display = "block";
        back.style.backgroundColor = "rgba(255, 255, 255, 0.878)";
        back.style.transition = "display 1s ease";
    }
}

function signIn(){
    const style = getComputedStyle(sign_in_card);
    const y_pos = window.scrollY;
    if (style.display == "none") {
        sign_in_card.style.display = "block";
        sign_in_card.style.zIndex = "4";
        back.style.display = "block";
        back.style.backgroundColor = "rgba(0, 0, 0, 0.737)";
        back.style.height = 120 + y_pos + "vh";
        sign_in_card.style.marginTop = 50 + y_pos + "px";
        sign_in_card.style.transition = "all 0.4s ease-in";
        main_search_box.style.zIndex = "0";
    } else {
        signInRemoveStyle();
        back.style.display = "none";
    }

}   

function toDoScroll(direction){
    let right_arrow = document.querySelector(".right-arrow1")
    let left_arrow = document.querySelector(".left-arrow1")
    let cards = document.querySelectorAll(".card1");

    document.getElementById("overflow-card1").style.display = "flex"; 
    if (direction === "right"){
        var translate_x = "translateX(-285px)";
        left_arrow.style.visibility = "visible";
        right_arrow.style.visibility = "hidden";
    }else{
        var translate_x = "translateX(0px)";
        right_arrow.style.visibility = "visible";
        left_arrow.style.visibility = "hidden";
    }
    cards.forEach((card) =>{
        card.style.display  = "flex";
        card.style.transform = translate_x;
        card.style.transition = "transform 0.8s ease";
    });
}

function colomboScroll(direction){
    let right_arrow = document.querySelector(".right-arrow2");
    let left_arrow = document.querySelector(".left-arrow2");
    let cards = document.querySelectorAll(".card2");
    let hearts = document.querySelectorAll(".heart");
    
    if (direction === "right"){
        var translate_x = "translateX(-1140px)";     // -285*4  == -1140
        left_arrow.style.visibility = "visible";
        right_arrow.style.visibility = "hidden";
    }else{
        var translate_x = "translateX(0px)";
        right_arrow.style.visibility = "visible";
        left_arrow.style.visibility = "hidden";
    }
    cards.forEach((card) =>{
        card.style.display  = "block";
        card.style.transform = translate_x;
        card.style.transition = "transform 0.8s ease";
    });
    hearts.forEach((heart) => {
        heart.style.display = "inline";
    });
}

function searchRemoveStyle(){
    form.style.borderRadius = "50px";
    results.style.display = "none";
    back.style.display = "none";
}

function signInRemoveStyle(){
    sign_in_card.style.display = "none";
    main_search_box.style.zIndex = "4";
}