// W h3 w html wrzucam czas
let h3 = document.querySelector("h3");
let timeNow = "";
let timeText = "12 : 30 : 00"

let clock = setInterval(function(){
    
    timeNow = new Date();
    
    timeText = timeNow.getHours() + ' : ' + timeNow.getMinutes() + ' : ' + timeNow.getSeconds();
   
    h3.textContent = timeText;
    
}, 1000);

