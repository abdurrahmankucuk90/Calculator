const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const screen2 = document.querySelector(".d1");
const screen1 = document.querySelector(".d2");

const calculator = document.querySelector(".calculator");
let a = 0;
let b = 0;
let c = 0;
//*use reduce

calculator.addEventListener("click", (e) => {
  //!Main if
  if (c == 0) {
    //!Numbers except zero
    if (e.target.classList.contains("numb")) {
      arr1.push(e.target.innerText);
      screen1.innerText = arr1.join("");
      if (arr1[0] == 0 && arr1[1] != ".") {
        arr1.splice(0, 1);
        screen1.innerText = arr1.join("");
      }
    }
    //! Zero
    else if (e.target.classList.contains("zero")) {
      if (arr1.length == 0) {
        arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
      } else if (arr1.length == 1) {
        if (arr1[0] == 0) {
          screen1.innerText = arr1.join("");
        } else {
          arr1.push(e.target.innerText);
          screen1.innerText = arr1.join("");
        }
      } else if (arr1.length >= 2) {
        arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
      }
    }
    //!Prosent icon
    else if (e.target.classList.contains("ps")) {
      let d = arr1.reduce((a, b) => a + b) / 100
      arr1.push(d.split)
    }
    //!Operation icon
    else if (e.target.classList.contains("yellow")) {
      arr2.push(e.target.innerText);
      screen2.innerText = arr1.join("") + " " + arr2.join("") + " ";
      a = parseInt(arr1.join(""));
      arr1.splice(0, arr1.length);
      screen1.innerText = "";
    }
    //!After operation entred
    else if (e.target.classList.contains("numb") && arr2[0] != "") {
      arr1.push(e.target.innerText);
      screen1.innerText = arr1.join("");
    }
    //!First operation run
    else if (e.target.classList.contains("eq")) {
      b += parseInt(arr1.join(""));
      arr4.push(a);
      arr4.push(b);
      if (arr2[0] == "+") {
        c = arr4.reduce((a, b) => a + b);
        arr2.splice(0, arr2.length);
      } else if (arr2[0] == "*") {
        c = arr4.reduce((a, b) => a * b);
        arr2.splice(0, arr2.length);
      } else if (arr2[0] == "/") {
        c = arr4.reduce((a, b) => a / b);
        arr2.splice(0, arr2.length);
      } else if (arr2[0] == "-") {
        c = arr4.reduce((a, b) => a - b);
        arr2.splice(0, arr2.length);
      }
      arr4.splice(0, arr4.length, c);
      screen2.innerText = arr4.join("");
      arr1.splice(0, arr1.length);
      screen1.innerText = "";
    }
  }
  //!Main else
  else {
    //!Operation icon
    if (e.target.classList.contains("yellow")) {
      arr2.push(e.target.innerText);
      screen2.innerText = c + " " + arr2.join("");
    }
    //!Number
    else if (e.target.classList.contains("numb")) {
      arr1.push(e.target.innerText);
      screen1.innerText = arr1.join("");
      if (arr1[0] == 0 && arr1[1] != ".") {
        arr1.splice(0, 1);
        screen1.innerText = arr1.join("");
      }
    }
    //! Zero
    else if (e.target.classList.contains("zero")) {
      if (arr1.length == 0) {
        arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
      } else if (arr1.length == 1) {
        if (arr1[0] == 0) {
          screen1.innerText = arr1.join("");
        } else {
          arr1.push(e.target.innerText);
          screen1.innerText = arr1.join("");
        }
      } else if (arr1.length >= 2) {
        arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
      }
    }
    //!Continous Operation run
    else if (e.target.classList.contains("eq")) {
      b = parseInt(arr1.join(""));
      arr4.push(b);
      if (arr2[0] == "+") {
        c = arr4.reduce((a, b) => a + b);
        arr2.splice(0, arr2.length);
      } else if (arr2[0] == "*") {
        c = arr4.reduce((a, b) => a * b);
        arr2.splice(0, arr2.length);
      } else if (arr2[0] == "/") {
        c = arr4.reduce((a, b) => a / b);
        arr2.splice(0, arr2.length);
      } else if (arr2[0] == "-") {
        c = arr4.reduce((a, b) => a - b);
        arr2.splice(0, arr2.length);
      }
      arr4.splice(0, arr4.length, c);
      screen2.innerText = arr4.join("");
      arr1.splice(0, arr1.length);
      screen1.innerText = "";
    }
  }
});
