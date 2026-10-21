
const mouth = document.querySelector(".mouth");
const tooth = document.querySelector(".tooth");
const monsterButton = document.getElementById("monster-button");
const monster = document.querySelector(".monster");
const monsterTalk = document.getElementById("monster-talk")

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

const monsterFriends = document.getElementById("monster-friend");
const amigos = document.getElementById("amigos");

monsterFriends.addEventListener("click", function() {
    amigos.style.display = "block";
});


const friendsButton = document.getElementById("monster-friend");
const friendsPopup = document.getElementById("friends-popup");

friendsButton.addEventListener("click", function() {
    friendsPopup.style.display = "flex";
});

friendsPopup.addEventListener("click", function(event) {
    if (event.target === friendsPopup) {
        friendsPopup.style.display = "none";
    }
});


