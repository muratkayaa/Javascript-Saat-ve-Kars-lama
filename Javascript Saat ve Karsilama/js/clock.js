let person = window.prompt("Please enter your name: ");
if (person != null){
    document.getElementById("myName").innerHTML = person;
}

function kontrol(i) {
    if (i < 10) {i = "0" + i};  
    return i;
    }

function showTime() {
    const today = new Date();
    let weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = weekday[today.getDay()];
    
    m = kontrol(m);
    s = kontrol(s);



    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + d;
    setTimeout(showTime, 1000);
    }


showTime()
