const calculatePower = () => {
    const base = parseInt(document.getElementById("base").value);
    const index = parseInt(document.getElementById("index").value);
  
    const power = (x, n) => {
      return Math.pow(x, n);
    };
    let resultPow = power(base, index);
    document.getElementById(
      "resultPower"
    ).innerHTML = `${base}^${index}=${resultPow}`;
  };