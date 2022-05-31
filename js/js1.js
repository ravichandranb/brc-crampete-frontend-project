var tempp1 = true;
var tempp2 = true;
var tempp3 = true;
var tempp4 = true;
var tempp5 = true;

function hideFunction(a1) {
  tempp5 = !tempp5;

  a2 = a1 + 1;
  console.log(tempp5);

  if (tempp5 == false) {
    document.getElementById(a2).style.display = "block";
  } else {
    document.getElementById(a2).style.display = "none";
  }
}

function hidePara(b1) {
  b2 = b1 + 1;
  b3 = b2 + 1;
  document.getElementById(b1).setAttribute("class", "hide-it1");
  document.getElementById(b2).setAttribute("class", "hide-it2");
  document.getElementById(b3).setAttribute("class", "hide-it2");
}

function showPara(c1) {
  c2 = c1.slice(0, 9);
  c3 = c1.slice(0, 10);
  c4 = c1.slice(0, 8);
  console.log(c2);
  console.log(c3);
  console.log(c4);
  document.getElementById(c2).setAttribute("class", "hide-it1");
  document.getElementById(c3).setAttribute("class", "hide-it1");
  document.getElementById(c4).setAttribute("class", "hide-it2");
}

/*
 document.querySelector("#_info1").addEventListener("click", () => {
        document.querySelector("#hide-it1").setAttribute("class", "hide-it2");
        document.querySelector("#hide-it2").setAttribute("class", "hide-it2");
        document.querySelector("#_info1").setAttribute("class", "hide-it1");
      });
      document.querySelector("#_info2").addEventListener("click", () => {
        document.querySelector("#hide-it1").setAttribute("class", "hide-it1");
        document.querySelector("#hide-it2").setAttribute("class", "hide-it1");
        document.querySelector("#_info1").setAttribute("class", "hide-it2");
      });

document.querySelector("#circle1").addEventListener("click", () => {
  tempp1 = !tempp1;

  var circle2 = document.getElementById("circle2");
  if (tempp1 == false) {
    circle2.style.display = "block";
  } else {
    circle2.style.display = "none";
  }
});

document.querySelector("#circle11").addEventListener("click", () => {
  tempp2 = !tempp2;
  console.log(tempp1);
  var circle21 = document.getElementById("circle21");
  if (tempp2 == false) {
    circle21.style.display = "block";
  } else {
    circle21.style.display = "none";
  }
});

document.querySelector("#circle12").addEventListener("click", () => {
  tempp3 = !tempp3;
  console.log(tempp1);
  var circle22 = document.getElementById("circle22");
  if (tempp3 == false) {
    circle22.style.display = "block";
  } else {
    circle22.style.display = "none";
  }
});

document.querySelector("#circle13").addEventListener("click", () => {
  tempp4 = !tempp4;
  console.log(tempp1);
  var circle23 = document.getElementById("circle23");
  if (tempp4 == false) {
    circle23.style.display = "block";
  } else {
    circle23.style.display = "none";
  }
});

document.querySelector("#circle14").addEventListener("click", () => {
  tempp5 = !tempp5;
  console.log(tempp1);
  var circle24 = document.getElementById("circle24");
  if (tempp5 == false) {
    circle24.style.display = "block";
  } else {
    circle24.style.display = "none";
  }
});

*/
