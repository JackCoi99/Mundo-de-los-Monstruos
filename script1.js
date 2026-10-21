
const mouth = document.querySelector(".mouth");
const tooth = document.querySelector(".tooth");
const monster = document.querySelector(".monster");
const monsterButton = document.getElementById("monster-button");
const monsterTalk = document.getElementById("monster-talk")
const friendsButton = document.getElementById("monster-friend");
const friendsPopup = document.getElementById("friends-popup");
const monsterMove = document.getElementById("monster-move");


mouth.addEventListener("click", function() {
    mouth.classList.toggle("mouth-closed");

    tooth.style.display =
        mouth.classList.contains("mouth-closed") ? "none" : "block";
});

monsterButton.addEventListener("click", function() {
    monster.classList.toggle("monster-purple");
});


monsterTalk.addEventListener("click", function() {
    alert("Augh! Que te asuste!");
})


friendsButton.addEventListener("click", function() {
    friendsPopup.style.display = "flex";
});

friendsPopup.addEventListener("click", function(event) {
    if (event.target === friendsPopup) {
        friendsPopup.style.display = "none";
    }
});

monsterMove.addEventListener("click", function(event) {
    monster.classList.remove("monster-shaking");

    void monster.offsetWidth;

    monster.classList.add("monster-shaking");
});
