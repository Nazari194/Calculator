let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operation");
let dot = document.getElementById("dot");
let deleteButtons = document.querySelectorAll(".delete");
let resultButtons = document.getElementById("result");
let display = document.getElementById("display-id");
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = "";
let percentButtons = document.getElementById("percent");

for (let i = 0; i < numberButtons.length; i++) {
  let number = numberButtons[i];
  number.addEventListener("click", function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < operationButtons.length; i++) {
  let operation = operationButtons[i];
  operation.addEventListener("click", function (e) {
    operations(e.target.textContent);
  });
}

for (let i = 0; i < deleteButtons.length; i++) {
  let deleteBtn = deleteButtons[i];
  deleteBtn.addEventListener("click", function (e) {
    clear(e.target.id);
  });
}

dot.addEventListener("click", decimal);
resultButtons.addEventListener("click", result);
percentButtons.addEventListener("click", percent);


function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    display.value += number;
  }
}

function operations(op) {
  let localOperationMemory = display.value;
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += Number(localOperationMemory);
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= Number(localOperationMemory);
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= Number(localOperationMemory);
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= Number(localOperationMemory);
    } else {
      memoryCurrentNumber = Number(localOperationMemory);
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
}
function decimal(params) {
  let localDecimalMemory = display.value;
  if (memoryNewNumber) {
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
}
function clear(id) {
  if(id === 'c') {
display.value = "0";
memoryNewNumber = true;
  }else if (id === 'ac'){
display.value = "0";
memoryNewNumber = true;
memoryCurrentNumber = 0;
memoryPendingOperation = '';
  }
}

function percent(params) {
  
}
