const calculator = document.querySelector(".calculator");
const numb = document.querySelector(".numb");
const yellow = document.querySelector(".yellow");
const ac = document.querySelector(".ac");
const screen2 = document.querySelector(".d1");
const screen1 = document.querySelector(".d2");
const eq = document.querySelector(".eq");
const np = document.querySelector(".np");
screen2.innerHTML = [];
const arr1 = [];
const arr2 = [];
const arr3 = [];

calculator.addEventListener("click", (e) => {
  if (arr2.length == 0) {
    //*Number input
    if (e.target.classList.contains("numb")) {
      arr1.push(e.target.innerText);
      screen1.innerText = arr1.join("");
      if (arr1[0] == 0 && arr1[1] != "" && arr1[1] != ".") {
        arr1.splice(0, 1);
        // arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
      }
    } //* zero input
    else if (e.target.classList.contains("zero")) {
      if (arr1.length < 1) {
        arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
      } else if (arr1.length == 2) {
        if (arr1[0] == 0 && arr1[1] == ["."]) {
          arr1.push(e.target.innerText);
          screen1.innerText = arr1.join("");
        } else {
          arr1.push(e.target.innerText);
          screen1.innerText = arr1.join("");
        }
      } else if (arr1.length == 1 || arr1.length > 2) {
        if (arr1.length == 1) {
          screen1.innerText = arr1.join("");
        } else {
          if (arr1[0] == 0) {
            arr1.push(e.target.innerText);
            screen1.innerText = arr1.join("");
          }
        }
      }
      // if (arr1[0] == "") {
      //   arr1.push(e.target.innerText);
      //   if (arr1[0] == 0 && arr1[1] != ".") {
      //     screen1.innerText = "0";
      //   } else if (arr1[0] == 0 && arr1[1] == ".") {
      //     screen1.innerText = ["0", "."].join("");
      //   }
      // } else {
      //   arr1.push(e.target.innerText);
      // }
      console.log(arr1);
    } //*decimal input
    else if (e.target.classList.contains("dot")) {
      if (!arr1.includes(".")) {
        arr1.push(e.target.innerText);
      }
      if (arr1[0] == ".") {
        arr1.splice(0, 0, "0");
      }
      screen1.innerText = arr1.join("");
    } //*operation input
    else if (e.target.classList.contains("yellow")) {
      arr2.push(e.target.innerText);
      screen2.innerText = arr1.join("") + " " + arr2.join("") + " ";
      screen1.innerText = "";
    } //*reset button
    else if (e.target.classList.contains("ac")) {
      arr1.splice(0, arr1.length);
      arr2.splice(0, arr2.length);
      arr3.splice(0, arr3.length);
      screen1.innerText = "";
      screen2.innerText = "";
    } //*negatif input
    else if (e.target.classList.contains("np")) {
      if (arr1[0] != "-") {
        arr1.splice(0, 0, "-");
        screen1.innerText = arr1.join("");
      }
    }
    //* yuzde input
    else if (e.target.classList.contains("ps")) {
      screen1.innerText = screen1.innerText / 100;
      arr1.splice(0, arr1.length, ...screen1.innerText);
      console.log(arr1);
    }
  } //*arr3 starts from here
  //*number input for arr3
  else {
    if (e.target.classList.contains("numb")) {
      arr3.push(e.target.innerText);
      screen1.innerText = arr3.join("");
      if (arr3[0] == 0 && arr3[1] != "" && arr3[1] != ".") {
        arr3.splice(0, 1);
        // arr3.push(e.target.innerText);
        screen1.innerText = arr3.join("");
      }
    } //*zero input for arr3
    else if (e.target.classList.contains("zero")) {
      if (arr3.length < 1) {
        arr3.push(e.target.innerText);
        screen1.innerText = arr3.join("");
      } else if (arr3.length == 2) {
        if (arr3[0] == 0 && arr3[1] == ["."]) {
          arr3.push(e.target.innerText);
          screen1.innerText = arr3.join("");
        }
      } else if (arr3.length == 1 || arr3.length > 2) {
        if (arr3.length == 1) {
          screen1.innerText = arr3.join("");
        } else {
          if (arr3[0] == 0) {
            arr3.push(e.target.innerText);
            screen1.innerText = arr3.join("");
          }
        }
      }
    } //* yuzde for arr3
    else if (e.target.classList.contains("ps")) {
      screen1.innerText = screen1.innerText / 100;
      arr3.splice(0, arr3.length, ...screen1.innerText);
      console.log(arr3);
    }
    //*Negatif input for arr3
    else if (e.target.classList.contains("np")) {
      if (arr3[0] != "-") {
        arr3.splice(0, 0, "-");
        screen1.innerText = arr3.join("");
      }
    } //*decimal input for arr3
    else if (e.target.classList.contains("dot")) {
      if (!arr3.includes(".")) {
        arr3.push(e.target.innerText);
      }
      if (arr3[0] == ".") {
        arr3.splice(0, 0, "0");
      }
      screen1.innerText = arr3.join("");
    } //*reset button for arr3
    else if (e.target.classList.contains("ac")) {
      arr1.splice(0, arr1.length);
      arr2.splice(0, arr2.length);
      arr3.splice(0, arr3.length);
      screen1.innerText = "";
      screen2.innerText = "";
    } else if (e.target.classList.contains("eq")) {
      screen2.innerText = calc(+arr1.join(""), arr2[0], +arr3.join(""));
      arr1.splice(0, arr1.length);
      arr2.splice(0, arr2.length);
      arr3.splice(0, arr3.length);
      screen1.innerText = "";
    }
    console.log(arr1);
  }
});

function calc(a, b, c) {
  if (b == "+") {
    return a + c;
  } else if (b == "-") {
    return a - c;
  } else if (b == "/") {
    return a / c;
  } else if (b == "X") {
    return a * c;
  }
}
