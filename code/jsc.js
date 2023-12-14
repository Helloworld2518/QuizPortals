//count total
var count = 0;
let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let clickCount6 = 0;
let clickCount7 = 0;
let clickCount8 = 0;
let clickCount9 = 0;

//kotak pertanyaan, nilai atas
var question = document.getElementsByClassName("text-wrapper-16");
var counterElement = document.getElementsByClassName("text-wrapper-13");

//kotak scor kanan-kiri
var nilaiakhirkiri = document.getElementsByClassName("text-wrapper-15");
var nilaiakhirkanan = document.getElementsByClassName("text-wrapper-14");

//x kiri
var silangkiri1 = document.getElementsByClassName("x");
var silangkiri2 = document.getElementsByClassName("img1");
var silangkiri3 = document.getElementsByClassName("x-2");

//x kanan
var silangkanan1 = document.getElementsByClassName("x-3");
var silangkanan2 = document.getElementsByClassName("img2");
var silangkanan3 = document.getElementsByClassName("x-4");

//Jawaban 1-5
var jawab1 = document.getElementsByClassName("jawaban1");
var jawab2 = document.getElementsByClassName("jawaban2");
var jawab3 = document.getElementsByClassName("jawaban3");
var jawab4 = document.getElementsByClassName("jawaban4");
var jawab5 = document.getElementsByClassName("jawaban5");
var jawab6 = document.getElementsByClassName("jawaban6");
var jawab7 = document.getElementsByClassName("jawaban7");

//nilai masing-masing jawaban (total 100)
var nilai1 = document.getElementsByClassName("scor1");
var nilai2 = document.getElementsByClassName("scor2");
var nilai3 = document.getElementsByClassName("scor3");
var nilai4 = document.getElementsByClassName("scor4");
var nilai5 = document.getElementsByClassName("scor5");
var nilai6 = document.getElementsByClassName("scor6");
var nilai7 = document.getElementsByClassName("scor7");

//efek suara
var sfxbenar = document.getElementById("suarabenar");
var sfxsalah = document.getElementById("suarasalah");

function wrongsound() {
  sfxsalah.play();
}

function truesound() {
  sfxbenar.play();
}

function scoratas() {
  counterElement[0].textContent = count;
}

function xkiri() {
  // Initialize click count
  clickCount1++; // Increment the click count
  if (clickCount1 === 1) {
    silangkiri1[0].style.display = "block";
    wrongsound();
  } else if (clickCount1 === 2) {
    silangkiri2[0].style.display = "block";
    wrongsound();
  } else if (clickCount1 === 3) {
    silangkiri3[0].style.display = "block";
    wrongsound();
  }
}

function xkanan() {
  // Initialize click count
  clickCount2++; // Increment the click count
  if (clickCount2 === 1) {
    silangkanan1[0].style.display = "block";
    wrongsound();
  } else if (clickCount2 === 2) {
    silangkanan2[0].style.display = "block";
    wrongsound();
  } else if (clickCount2 === 3) {
    silangkanan3[0].style.display = "block";
    wrongsound();
  }
}

function answer1() {
  clickCount3++;
  if (clickCount3 === 1) {
    if ((jawab1[0].style.display = "none")) {
      jawab1[0].style.display = "block";
      nilai1[0].style.display = "block";
      truesound();
      count = count + 40;
      scoratas();
    }
  } else {
    count = count + 0;
  }
}

function answer2() {
  clickCount4++;
  if (clickCount4 === 1) {
    if ((jawab2[0].style.display = "none")) {
      jawab2[0].style.display = "block";
      nilai2[0].style.display = "block";
      truesound();
      count = count + 35;
      scoratas();
    }
  }
}

function answer3() {
  clickCount5++;
  if (clickCount5 === 1) {
    if ((jawab3[0].style.display = "none")) {
      jawab3[0].style.display = "block";
      nilai3[0].style.display = "block";
      truesound();
      count = count + 30;
      scoratas();
    }
  }
}

function answer4() {
  clickCount6++;
  if (clickCount6 === 1) {
    if ((jawab4[0].style.display = "none")) {
      jawab4[0].style.display = "block";
      nilai4[0].style.display = "block";
      truesound();
      count = count + 25;
      scoratas();
    }
  }
}

function answer5() {
  clickCount7++;
  if (clickCount7 === 1) {
    if ((jawab5[0].style.display = "none")) {
      jawab5[0].style.display = "block";
      nilai5[0].style.display = "block";
      truesound();
      count = count + 20;
      scoratas();
    }
  }
}

function answer6() {
  clickCount8++;
  if (clickCount8 === 1) {
    if ((jawab6[0].style.display = "none")) {
      jawab6[0].style.display = "block";
      nilai6[0].style.display = "block";
      truesound();
      count = count + 15;
      scoratas();
    }
  }
}

function answer7() {
  clickCount9++;
  if (clickCount9 === 1) {
    if ((jawab7[0].style.display = "none")) {
      jawab7[0].style.display = "block";
      nilai7[0].style.display = "block";
      truesound();
      count = count + 10;
      scoratas();
    }
  }
}

function scorkiri() {
  var sumber = counterElement[0].innerHTML;
  nilaiakhirkiri[0].innerHTML = sumber;
  counterElement[0].innerHTML = 0;
}

function scorkanan() {
  var sumber = counterElement[0].innerHTML;
  nilaiakhirkanan[0].innerHTML = sumber;
  counterElement[0].innerHTML = 0;
}

function pertanyaan() {
  if ((question[0].style.display = "none")) {
    question[0].style.display = "block";
  }
}

function faceoffwrong() {
  sfxsalah.play();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 49: //ini kode untuk jawaban 1
      answer1();
      break;

    case 50: //ini kode untuk jawaban 2
      answer2();
      break;

    case 51: //ini kode untuk jawaban 3
      answer3();
      break;

    case 52: //ini kode untuk jawaban 4
      answer4();
      break;

    case 53: //ini kode untuk jawaban 5
      answer5();
      break;

    case 54: //ini kode untuk jawaban 5
      answer6();
      break;

    case 55: //ini kode untuk jawaban 5
      answer7();
      break;

    case 67: //ini kode untuk salah sebelah kanan
      xkanan();
      break;

    case 90: //ini kode untuk salah sebelah kiri
      xkiri();
      break;

    case 37:
      scorkiri();

    case 39:
      scorkanan();

    case 81:
      pertanyaan();

      case 87:
      faceoffwrong();
  }
};

function back() {
  window.location.assign("home.html");
}
