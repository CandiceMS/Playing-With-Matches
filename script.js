
  let number = document.querySelectorAll('.numbers');
  // line above grabs all numbers elements.
// console.log(number);
// console.log(number[0]);
// console.log(number[1]);
let display = document.querySelector('.displayAlert');
let reloadBtn = document.querySelector('button[name="reload"]');

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
}
    function matchNumbers() {
      let sameNumber1 = number[0];
      let sameNumber2 = number[1];
      let sameNumber3 = number[2];

      if (sameNumber2.innerHTML === sameNumber1.innerHTML) {
         sameNumber1.classList.add("highlight");
        sameNumber2.classList.add("highlight");
        display.innerHTML = "You have a match!";
      }
      if (sameNumber2.innerHTML === sameNumber3.innerHTML) {
        sameNumber2.classList.add("highlight");
      sameNumber3.classList.add("highlight");
      display.innerHTML = "You have a match!";
      }
      if(sameNumber2.innerHTML === sameNumber1.innerHTML && sameNumber2.innerHTML === sameNumber3.innerHTML ){
        sameNumber1.classList.add("highlight");
        sameNumber2.classList.add("highlight");
        sameNumber3.classList.add("highlight");
        display.innerHTML = "A triple match!";
      }
    }

   loopNumbers(randomNumber());
   matchNumbers();

  reloadBtn.addEventListener('click', function() {
      location.reload();
  });
