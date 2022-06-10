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
    //!Delete icon
    else if (e.target.classList.contains("ac")) {
      arr1.splice(0, arr1.length);
      arr2.splice(0, arr2.length);
      screen1.innerText = "";
      screen2.innerText = "";
    }
    //!Decimel icon
    else if (e.target.classList.contains("dot")) {
      if (arr1.includes(".")) {
        screen1.innerText = arr1.join("");
      }
      if (arr1.length == 0) {
        arr1.push("0");
        arr1.push(".");
        screen1.innerText = arr1.join("");
      }
    }
    //!Prosent icon
    else if (e.target.classList.contains("ps")) {
      let d = arr1.reduce((a, b) => a + b) / 100;
      arr1.splice(0, arr1.length, d);
      screen1.innerText = arr1.join("");
      let a = parseFloat(arr1.join(""));
    }
    //!Negative icon
    else if (e.target.classList.contains("np")) {
      if (arr1.includes("-")) {
        screen1.innerText = arr1.join("");
      } else {
        arr1.splice(0, 0, "-");
        screen1.innerText = arr1.join("");
      }
    }
    //!Operation icon
    else if (e.target.classList.contains("yellow")) {
      if (arr1.length == 0 && arr2.length == 0) {
        arr1.push("0");
        screen1.innerText = arr1.join("");
        arr2.push(e.target.innerText);
        screen2.innerText = arr1.join("") + " " + arr2.join("") + " ";
        a = parseFloat(arr1.join(""));
        arr1.splice(0, arr1.length);
        screen1.innerText = "";
      } else if (arr2.length > 0) {
        arr2.splice(1, arr2.length);     
      } else {
        arr2.push(e.target.innerText);
        screen2.innerText = arr1.join("") + " " + arr2.join("") + " ";
        a = parseFloat(arr1.join(""));
        arr1.splice(0, arr1.length);
        screen1.innerText = "";
      }
    }
    //!After operation entred
    else if (e.target.classList.contains("numb") && arr2[0] != "") {
      arr1.push(e.target.innerText);
      screen1.innerText = arr1.join("");
    }
    //!First operation run
    else if (e.target.classList.contains("eq")) {
      b += parseFloat(arr1.join(""));
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
      if (arr1.length == 0 && arr2.length == 0) {
        arr1.push("0");
        screen1.innerText = arr1.join("");
        arr2.push(e.target.innerText);
        screen2.innerText = c + " " + arr2.join("") + " ";
        arr1.splice(0, arr1.length);
        screen1.innerText = "";
      } else if (arr2.length > 0) {
        arr2.splice(1, arr2.length);       
      } else {
        arr2.push(e.target.innerText);
        screen2.innerText = c + " " + arr2.join("") + " ";
        arr1.splice(0, arr1.length);
        screen1.innerText = "";
      }
    }
    //!Negative icon
    else if (e.target.classList.contains("np")) {
      if (arr1.includes("-")) {
        screen1.innerText = arr1.join("");
      } else {
        arr1.splice(0, 0, "-");
        screen1.innerText = arr1.join("");
      }
    }
    //!Number
    else if (e.target.classList.contains("numb")) {
      arr1.push(e.target.innerText);
      screen1.innerText = arr1.join("");
      if (arr1[0] == 0 && arr1[1] != ".") {
        arr1.splice(0, 1);
        screen1.innerText = arr1.join("");
      }
    } else if (e.target.classList.contains("ps")) {
      let d = arr1.reduce((a, b) => a + b) / 100;
      arr1.splice(0, arr1.length, d);
      screen1.innerText = arr1.join("");
      let c = parseFloat(arr1.join(""));
    }
    //!Delete icon
    else if (e.target.classList.contains("ac")) {
      arr1.splice(0, arr1.length);
      arr2.splice(0, arr2.length);
      arr4.splice(0, arr4.length);
      screen1.innerText = "";
      screen2.innerText = "";
      a = 0;
      b = 0;
      c = 0;
    }
    //!Decimel icon
    else if (e.target.classList.contains("dot")) {
      if (arr1.includes(".")) {
        screen1.innerText = arr1.join("");
      }
      if (arr1.length == 0) {
        arr1.push("0");
        arr1.push(".");
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
      b = parseFloat(arr1.join(""));
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
