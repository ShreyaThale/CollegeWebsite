let i = 0;
var pics = ["./images/Ai & Data Science.jfif", "./images/learning1.jfif","./images/college.jpeg"];
setInterval(function change1() {
  var pic = document.getElementById('block');
  if (i >= pics.length) {
    i = 0;
  }
  else {
    pic.src = pics[i];
    i = i + 1;
  }
}, 3000);




let j = 0;
var tx = ["Introducing B.E. in AI & Data Science", "Innovative & Process-Oriented Learning", "Terna Engineering College"];
setInterval(function change2() {
 
  if (j >= tx.length) {
    j = 0;
  }
  else {
    document.getElementById("okl").textContent=tx[j];

    j = j + 1;
  }
}, 3000);