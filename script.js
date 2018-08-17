
  let number = document.querySelectorAll('.numbers');
  // line above grabs all numbers elements.
// console.log(number);
// console.log(number[0]);
// console.log(number[1]);

  function randomNumber(max) {
    return Math.ceil(Math.random() * Math.floor(9));
  }

  function loopNumbers() {
    for (var i = 0; i < number.length; i++) {
      number[i].innerHTML = randomNumber();
    }
    // Alternative: create new variables/instances.
    // let indexList = number[i];
    // let random = randomNumber();

    function matchNumbers() {
      
    }
  }

  loopNumbers(randomNumber());
