window.addEventListener("scroll", function () {
  let newLogo = document.getElementById("emptyfirst");
  let modifyNav = document.querySelector(".navbar-container");
  let modifysearch = document.querySelector("#search-box");
  modifysearch.innerHTML = `
    <span class="material-symbols-outlined">
                search
                </span>
                <div class="submenu-search">
                    <input type="text" placeholder="What are you looking for?">
                    <button id="search-button">Search</button>
                </div>`;
  modifyNav.setAttribute("id", "modifiednav");
  // modifysearch.setAttribute("#search-box");
  let windowPosition = window.scrollY > 0;
  newLogo.innerHTML = ` <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vestian.com%2Fus%2Fimages%2Fdh_logo.png&f=1&nofb=1" alt="" id="newdh">
        `;
  newLogo.classList.toggle("newLogo-active", windowPosition);
  // console.log("inside");
});


// date
function livedate() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000){
        year += 1900;
    }  
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December");
// date end

// time
var currentTime = new Date();
var hrs = currentTime.getHours();
var mins = currentTime.getMinutes();
var sec = currentTime.getSeconds();

if(hrs == 24){
    h = 0 ;
}else if(hrs > 12){
    hrs = hrs - 0;
}

if(hrs < 10 ){
    hrs = "0" + hrs;
}

if(mins < 10){
    mins = "0" + mins;
}

if(sec < 10){
    sec = "0" + sec;
}

var realdate = document.getElementById("livedate");

realdate.textContent = `${dayarray[day]} ${daym} ${montharray[month]} ${year}` ;

// console.log('realtime:', realtime);

var realtime = document.getElementById("livetime");
realtime.textContent =`UPDATED: ${hrs}:${mins}:${sec} PM IST`;

setTimeout("livedate()", 1000);
}
livedate();
















