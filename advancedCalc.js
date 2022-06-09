const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const screen2 = document.querySelector(".d1");
const screen1 = document.querySelector(".d2");

const calculator = document.querySelector(".calculator");

//*use reduce

calculator.addEventListener("click", (e) => {
  if (arr2.length < 4)
    if (!arr2.includes("+" || "-" || "*" || "/")) {
      if (e.target.classList.contains("numb")) {
        arr1.push(e.target.innerText);
        screen1.innerText = arr1.join("");
        console.log(arr1);
        arr2.splice(0, 1);
        arr2.push(arr1.join(""));
        console.log(arr2);
      } else if (e.target.classList.contains("yellow")) {
        arr2.push(e.target.innerText);
        arr1.splice(0, arr1.length);
        screen2.innerText = arr2.join("");
        screen1.innerText = "";
      } 
    } else {
      if (e.target.classList.contains("numb")) {
        arr3.push(e.target.innerText);
        screen1.innerText = arr3.join("");
        console.log(arr3);
        arr2.splice(2, 3);
        arr2.push(arr3.join(""));
        console.log(arr2);
      }else if(e.target.classList.contains("eq")){
        calc(arr2[0], arr2[1], arr2[3])
      }

    }
});

function calc(a, b, c) {
  if (b == "+") {
    return a + c;
  }
  if (b == "*") {
    return a * c;
  }
  if (b == "-") {
    return a - c;
  }
  if (b == "/") {
    return a / c;
  }
}
