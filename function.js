function setData() {
    const txt = `
    Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused...
    
    I love you, not only for what you are, but for what I am when I am with you...

    Love is not just looking at each other, it's looking in the same direction...
    
    My love for you is like a song, that gets stronger as time goes on. I'm sorry for the things I do, but my love for you will always stay true.

    Though my heart aches and I feel blue, I'm sorry for what I said and what I do. But I promise to make it right, with all my might and all my might.

    I'm sorry for the things I've done, they weigh on my heart like a ton. But I hope you can see, that my love for thee, will always be number one.

    The past may be gone, but the memories remain. I'm sorry for the hurt and the pain. But I hope we can mend, and love without end, until the very end of our days.

    I'm sorry for the mistakes I've made, and for the love I've left unafraid. But I hope you can see, that my love for thee, will always be strong and free.

    My love for you is endless and true. I promise to always do my best and be here for you.

    My love for you burns bright, like a flame that never fades. I promise to always do my best and cherish you until the end of my days."

    No matter what life may bring, my love for you will remain. I'll always strive to make you happy, now and forever more.

    With each passing day, my love for you grows stronger. I promise to always do my best, to keep you safe and happy, forever longer.

    You are my everything, my sun, my moon, and shining stars. I promise to love you always, no matter where we are.

    I love you most than most... -Anthony Bernard Cereno.
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
        $("#background").html(`
        <div class="d-flex justify-content-center" id="absolute">
        <div class="background2 p-3" id="typed-content"></div>
        </div>
        <script>
        typeText();
        </script>
        `);
      });
    //   $("#background").on("click", "#message", function(){
    //     $("#background").html(`<div class="background2">
    //     <button id="message2" onclick="typeText()">message</button>
    //     </div>
    //     <div id="absolute">
    //     <div class="background2 p-3" id="typed-content"></div>
    //     </div>
    //     `);
    //   });
    // var audio = new Audio("https://www.youtube.com/watch?v=65ubnCdP-uo&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=1");
    //     audio.autoplay = true;
    //     audio.play();
    let background = document.getElementById("background");
});