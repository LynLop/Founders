const messages = [
'FOUNDERS',
'"You Deserve This."',
'"POPULAR POPULAR POPULAR"'
];
let messageIndex = 0;

document.addEventListener("DOMContentLoaded", (event) => {
const messageInterval = setInterval(function() {
    document.getElementById("Title").innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}, 3000);
});