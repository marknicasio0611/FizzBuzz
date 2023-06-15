function performFizzBuzz() {
    var number = document.getElementById("number").value;
    var fizzbuzzResult = "";
    
    for (var i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzzResult += "FizzBuzz ";
      } else if (i % 3 === 0) {
        fizzbuzzResult += "Fizz ";
      } else if (i % 5 === 0) {
        fizzbuzzResult += "Buzz ";
      } else {
        fizzbuzzResult += i + " ";
      }
    }
    
    document.getElementById("fizzbuzz-result").textContent = fizzbuzzResult;
  }