const calculateFact = () => {
    const fact = parseInt(document.getElementById("fact").value);
  

    const factorial = (n) => {
      let fac = BigInt(1);
      for (var i = n; i > 0; i--) {
        fac = fac * BigInt(i);
      }
      if (fact >= 52) {
        fac = Number.parseFloat(fac).toExponential(5);
      }
      return fac;
    };
    let resultFact;
    if (fact < 0) {
      document.getElementById("resultFact").innerHTML = `Error!`;
    } else if (fact == 0) {
      document.getElementById("resultFact").innerHTML = `Factorial= 1`;
    } else {
      resultFact = factorial(parseInt(fact));
      document.getElementById(
        "resultFact"
      ).innerHTML = `Factorial= ${resultFact}`;
    }
  };