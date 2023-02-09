function setData() {
    const txt = `
    Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused...
    
    I love you, not only for what you are, but for what I am when I am with you...

    Love is not just looking at each other, it's looking in the same direction...

    I love you most than most ...
    `;
    const outputDiv = document.getElementById('typed-content');
    return [txt, outputDiv]
    };
    function typeText() {
    const res =  setData();
    const txt = res[0];
    const outputDiv = res[1];
    let i = 0;
    const timerId = setInterval(() => {
    outputDiv.innerHTML += txt.charAt(i);
    i++;
    if (i === txt.length) {
    clearInterval(timerId);
    }
    },50);
};
$(document).ready(function(){
    $("#greet").on("click",function(){
        background.innerHTML = (`
    <div id="background">
        <div id=feel>
            <p class="left">Feel my...</p>
        </div>
        <div id=heart>
            <p class="right">heart beat</p>
        </div>
        <div id="chest">
            <div class="heart left side top"></div>
            <div class="heart center">&hearts;</div>
            <div class="heart right side"></div>
        </div>
    </div>
<button id="message"><h1>check inside</h1></button>`);
    });
    $("#background").on("click", "#message", function(){
        let messageButtonClicked = false;
        if (!messageButtonClicked) {
            messageButtonClicked = true};
        $("#background").html(`<div class="background2">
        <button id="message2" onclick="typeText()">message</button>
        </div>
        <div id="absolute">
        <div class="background2 p-3" id="typed-content"></div>
        </div>
        `);
      });
    let background = document.getElementById("background");
});