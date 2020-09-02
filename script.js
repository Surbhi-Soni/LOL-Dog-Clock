var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//getting it to show the current time on the page
var showCurrentTime = function(){
  //display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  //set Hours
  if(hours>=noon)
  {
    meridian = "PM";
  }
  if(hours > noon)
  {
    hours = hours - 12;
  }

  //set minutes
  if(minutes < 10)
  {
    minutes = "0" + minutes;
  }

  //set seconds

  if(seconds < 10)
  {
    seconds = "0" + seconds;
  }

  //put together the string that diplays the time
  var clockTime = hours + ":" + minutes + ':' + seconds + "" + meridian + "!";

  clock.innerText = clockTime;
};

//getting the clock to increment on its own and change out messages and pictures
var updateClock =function()
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://i.pinimg.com/564x/5c/fd/89/5cfd895daca427ca51e4909344ca32db.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var loldogImageJS = document.getElementById("loldogImage");

  if(time == partytime)
  {
      image = "https://media.istockphoto.com/photos/group-of-puppies-celebrating-a-new-year-picture-id1077972822";
      messageText = "Let's party";
  }
  else if(time == wakeuptime)
  {
    image = "https://static4.depositphotos.com/1006876/335/i/950/depositphotos_3351992-stock-photo-morning-time.jpg";
    messageText ="Wake Up!";
  }
  else if(time == lunchtime)
  {
    image = "https://i.pinimg.com/564x/e3/6c/8b/e36c8bd0a30d63c81622a7518c242d54.jpg";
    messageText ="Let's have some lunch!";
  }
  else if(time == naptime)
  {
    image = "https://static.boredpanda.com/blog/wp-content/uploads/2019/12/dogs-nap-time-puppy-spring-daycare-center-9-5e00866fb8b64__880.jpg";
    messageText = "Sleep tight!";
  }
  else if(time < noon)
  {
    image = "https://www.healthypawspetinsurance.com/blog/wp-content/uploads/wpid-Photo-20150424101141306.jpg";
    messageText ="Good morning!";
  }
  else if(time>= evening)
  {
    image = "https://iheartdogs.com/wp-content/uploads/2019/05/dog-dark-e1557266495731.jpg";
    messageText = "Good evening!"
  }
  else
  {
    image ="http://www.humordog.com/wp-content/uploads/2014/01/i-dunno-lol-dog.jpg";
    messageText = "Good afternoon";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  loldogImage.src = image;

  showCurrentTime();
};
updateClock();

//getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//getting the party time button to work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
  if (partytime < 0)
  {
    partytime = new Date().getHours();
    partyTimeButton.innerText = "perty Over!";
    partyTimeButton.style.backgroundcolor = "#0A8DAB";
  }
  else
  {
    partytime = -1;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundcolor="#222";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

//activates wakeup selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//activates lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

//activates nap time napTimeSelector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function()
{
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
